const express = require('express');
const app = express();
const port = 1166;
const db = require('../database/index.js');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '../../client/dist/index.html');
});

app.listen(port, () => {
  console.log(`Product Gallery listening at http://localhost:${port}`);
});
