'use strict';

const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('This is a basic cloud server. To try it out, add \'\\pokemon\' to the end of the address in the address bar');
});

app.get('/pokemon', async (req, res) => {
  let pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
  res.status(200).send(pokemon.data.results);
});

app.use('*', (req, res) => {
  res.send('The thing you are looking for does not exist');
});

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {
  app,
  start,
};