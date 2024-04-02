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

 // Endpoint to remove all scores except for the top ten
app.delete('/api/scores/cleanup', async (req, res) => {
  try {
      // First, find the scores that are not in the top ten
      const scoresToRemove = await Score.find().sort({ score: -1 }).skip(10);
      
      // Extract the IDs of scores to remove
      const idsToRemove = scoresToRemove.map(score => score._id);

      // Remove scores that are not in the top ten
      if (idsToRemove.length > 0) {
          await Score.deleteMany({
              _id: { $in: idsToRemove }
          });
      }

      res.status(200).send({ message: `Removed ${idsToRemove.length} scores from the database.` });
  } catch (error) {
      console.error('Failed to clean up scores:', error);
      res.status(500).send({ message: 'Failed to remove scores from the database.' });
  }
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
    const { basecode, prize, found } = req.body;
    const codes = [];

    for (let i = 1; i <= 50; i++) {
      const uniqueCode = `${basecode}-${generateUniqueCode()}`;
      codes.push(uniqueCode);
    }

    const newCard = new Card({ basecode, codes, prize, found });
    await newCard.save();
    res.status(201).send(newCard);
  } catch (error) {
    console.error('Error adding new card:', error);
    res.status(500).send(error.message);
  }
});

// Helper function to generate a unique code
function generateUniqueCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    if (i < 2) {
      code += '-';
    }
  }

  return code;
}

app.delete('/api/cards/delete-all', async (req, res) => {
  try {
    const result = await Card.deleteMany({});
    res.status(200).send({ message: `Deleted ${result.deletedCount} cards from the database.` });
  } catch (error) {
    console.error('Failed to delete cards:', error);
    res.status(500).send({ message: 'Failed to delete cards from the database.' });
  }
});

app.post('/api/retract-code', async (req, res) => {
  const { code } = req.body;

  try {
    const card = await Card.findOne({ codes: code });

    if (!card) {
      return res.status(404).json({ message: 'Code not found' });
    }

    const codeIndex = card.codes.indexOf(code);
    card.codes.splice(codeIndex, 1);
    card.codes.push(code);
    card.remainingCodes++; 
    card.found = false;

    await card.save();

    res.json({ message: 'Code retracted successfully' });
  } catch (error) {
    console.error('Error retracting code:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/check-code', async (req, res) => {
  try {
    const { code } = req.body;
    const matchingCard = await Card.findOne({ codes: code });

    if (matchingCard) {
      if (matchingCard.found) {
        res.send({ match: false, message: 'Code has already been used' });
      } else {
        matchingCard.found = true;
        matchingCard.remainingCodes--; // Decrement remainingCodes
        await matchingCard.save();

        const message = matchingCard.prize
          ? 'Congratulations! You won a free t-shirt!'
          : 'Code matched, but no prize.';

        res.send({ match: true, prize: matchingCard.prize, found: true, message: message, remainingCodes: matchingCard.remainingCodes }); // Send remainingCodes in the response
      }
    } else {
      res.send({ match: false, message: 'Code not found' });
    }
  } catch (error) {
    console.error('Error checking code:', error);
    res.status(500).send(error.message);
  }
});