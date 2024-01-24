const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const Score = require('./models/Score');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 587,
   secure: false,
   auth: {
       user: 'theband.teaze@gmail.com',
       pass: 'qkyp bghp drmy pyvw'
   }
});


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://raybone:158LcMqOVjgho4rk@teaze.f5ftf3r.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
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
   try {
     const { username, score } = req.body;
     const newScore = new Score({ username, score });
     await newScore.save();
     res.status(201).send(newScore);
   } catch (error) {
     console.error(error); // Log the error to the server console
     res.status(500).send(error.message); // Send the error message back to the client
   }
});

// Get leaderboard
app.get('/api/scores', async (req, res) => {
   try {
      const scores = await Score.find().sort({ score: -1 }).limit(10);
      res.send(scores);
   } catch (error) {
      res.status(500).send(error);
   }
});