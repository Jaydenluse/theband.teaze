const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const Score = require('./models/Score');
const Card = require('./models/Card');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 587,
   secure: false,
   auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASSWORD
   }
});


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('Could not connect to MongoDB', err));

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

app.post('/api/send-email', (req, res) => {
   const { name, email, message } = req.body;

   console.log("Received email request:", { name, email, message });
   
   // Email options
   const mailOptions = {
     from: email, 
     to: 'theband.teaze@gmail.com', 
     subject: `New message from -- name: ${name} email: ${email}`, // Subject line
     text: message 
   };

   console.log("Preparing to send email with options:", mailOptions);
 
   // Send email
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
  });
 });

 app.post('/api/scores', async (req, res) => {
   const MAX_SCORES = 3000000;
   try {
       const { username, score } = req.body;
       const currentCount = await Score.countDocuments();
       if (currentCount >= MAX_SCORES) {
           await Score.findOneAndDelete().sort({ score: 1 });
       }

       // Save the new score
       const newScore = new Score({ username, score });
       await newScore.save();

       // Calculate rank: count how many scores are greater than or equal to the submitted score
       const rank = await Score.countDocuments({ score: { $gte: score } });

       const totalEntries = await Score.countDocuments();

       // Send back the new score, rank, and total number of entries
       res.status(201).send({ score: newScore, rank, totalEntries });

       // Send back the new score and rank
       res.status(201).send({ score: newScore, rank });

   } catch (error) {
       console.error(error);
       res.status(500).send({ message: error.message });
   }
});

// Get leaderboard
app.get('/api/scores', async (req, res) => {
   try {
      const scores = await Score.find().sort({ score: -1 }).limit(10);
      res.send(scores);
   } catch (error) {
      res.status(500).send(error.message);
      res.status(404).send(error.message);
   }
});

app.get('/api/getcards', async (req, res) => {
   try {
       const cards = await Card.find({});
       res.send(cards);
   } catch (error) {
       console.error('Error fetching cards:', error);
       res.status(500).send(error.message);
   }
});

app.post('/api/cards', async (req, res) => {
   try {
     const { code, prize, found } = req.body;
     const newCard = new Card({ code, prize, found });
     await newCard.save();
     res.status(201).send(newCard);
   } catch (error) {
     console.error('Error adding new card:', error);
     res.status(500).send(error.message);
   }
 });

 app.post('/api/check-code', async (req, res) => {
   try {
     const { code } = req.body;
     const matchingCard = await Card.findOne({ code: code });
     if (matchingCard) {
      if (matchingCard.found) {
        // If the code has already been used
        res.send({ match: false, message: 'Code has already been used' });
      } else {
       // Mark the card as found and save it
       matchingCard.found = true;
       await matchingCard.save();

       const message = matchingCard.prize 
         ? 'Congratulations! You won a free t-shirt!' 
         : 'Code matched, but no prize.';

       res.send({ match: true, prize: matchingCard.prize, found: true, message: message });
      }
    } else {
      res.send({ match: false, message: 'Code not found' });
     }
   } catch (error) {
     console.error('Error checking code:', error);
     res.status(500).send(error.message);
   }
 });