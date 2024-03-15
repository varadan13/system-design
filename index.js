const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'mydb';

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB successfully');

  const db = client.db(dbName);

  // Routes and controllers go here
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
