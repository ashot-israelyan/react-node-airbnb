const express = require('express');
const mongoose = require('mongoose');
const { DB_URI } = require('./config/dev');

mongoose.connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log('Db connected'))
  .catch((err) => console.error('Error while connecting to DB', err));

const app = express();

app.get('/rentals', function (req, res) {
  res.json({ 'success': true });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, function () {
  console.log('I am running');
});