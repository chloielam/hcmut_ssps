// index.js
const express = require('express');
const router = express.Router();

// No need to set the view engine here

router.get('/', (req, res) => {
  res.render('index'); // Renders views/index.ejs
});

router.get('/about', (req, res) => {
  res.send('Welcome to the about page.');
});

module.exports = router;
