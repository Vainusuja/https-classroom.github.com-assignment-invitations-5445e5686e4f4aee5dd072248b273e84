// src/app.js
const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello from app.js!');
});

// Example API route
router.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example route' });
});

// Handle 404 errors
router.use((req, res, next) => {
  res.status(404).send('Sorry, that route does not exist.');
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;
