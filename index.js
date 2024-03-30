
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.PORT; 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
