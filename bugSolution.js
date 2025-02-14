const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Correctly sending only a JSON response
  res.json({ message: 'Hello!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});