const express = require('express');
const app = express();
const port = 3000; // Change this to the desired port number

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><p>This is a simple web application using docker</p>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});