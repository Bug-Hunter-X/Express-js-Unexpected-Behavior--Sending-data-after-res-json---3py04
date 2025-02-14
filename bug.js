const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Incorrectly using res.send after res.json
  res.json({ message: 'Hello!' });
  res.send('This will not be sent');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});