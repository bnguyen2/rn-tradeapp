const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', requireAuth, (req, res) => {
  res.send(`Hello World`);
});

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
