const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const { HASURA_HOSTNAME } = require('./constants');

const authRoutes = require('./routes/authRoutes');

const PORT = process.env.EXPRESS_PORT || 3000;

const app = express().disable('x-powered-by');

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(compression());
app.use(cors());

// routes
app.use(authRoutes);

// Redirect /api to hasura console
app.get(/\/api$/, (_, res) => res.redirect(`${HASURA_HOSTNAME}/console`));

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
