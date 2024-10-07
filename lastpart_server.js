// partb_server.js

const express = require('express');
const fs = require('fs');
const csv = require('csv-parser'); // Import csv-parser
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Create a POST route to save profiles
app.post('/profile', (req, res) => {
  // Your existing POST logic...

  // (Omitting for brevity, use the previous code for this part)
});

// Create a GET route to fetch profiles from CSV
app.get('/profiles', (req, res) => {
  const results = [];

  fs.createReadStream('profiles.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.status(200).json(results);
    })
    .on('error', (err) => {
      console.error("Error reading CSV file:", err);
      res.status(500).json({ error: 'Failed to read profiles from CSV file.' });
    });
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
