'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => {
  res.status(200).send('This is a simple Express App');
});

app.listen(PORT, () => console.log('Listening on port: ', PORT));