const express = require('express');
const superagent = require('superagent');
const apiKeys = require('../quandl/apiKeys');

const router = express.Router();

router.post('/ticker', async (req, res) => {
  const { ticker } = req.body;

  if (!ticker) {
    return res.status(422).send({ error: 'Please provide a ticker' });
  }

  try {
    const response = await superagent.get(
      `www.quandl.com/api/v3/datasets/CHRIS/CME_ES1.json?api_key=${apiKeys.API_KEY}&start_date=2020-05-20`
    );
    const parsedResponse = JSON.parse(response.text);
    const data = parsedResponse.dataset.data;
    return res.status(200).send({ data });
  } catch (err) {
    return console.log('err', err);
  }
});

module.exports = router;
