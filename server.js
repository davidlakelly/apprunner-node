const express = require('express');
const path = require('path');
const app = express();

// Set the static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const port = 80;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});