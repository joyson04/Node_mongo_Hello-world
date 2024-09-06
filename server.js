const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const port = 3000;

// Connect to MongoDB
const url = process.env.MONGO_URL
mongoose.connect(`${url}`,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
