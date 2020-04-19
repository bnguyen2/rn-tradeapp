const express = require('express');
const { pgClient } = require('../database/pgClient');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  const client = await pgClient.connect();
  const personData = await client.query('SELECT * from person');

  res.send({ personData });
});

router.post('/signin', (req, res) => {});

module.exports = router;
