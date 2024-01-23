// Import necessary modules or dependencies
const express = require('express');
const app = express();

// Define routes or other application logic
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
