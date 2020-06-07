const express = require('express');
const jwt = require('jsonwebtoken');
const { pgClient } = require('../database/pgClient');
const { hashPassword, comparePassword } = require('../helpers/passwordHelper');
const { JWT_SECRET } = require('../secret/index');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(422).send({ error: 'Must provide all information' });
  }

  const client = await pgClient.connect();

  try {
    const hashed = await hashPassword(password);

    const INSERT_PERSON_SQL = `INSERT into person(first_name, last_name) VALUES($1, $2) RETURNING *`;
    const INSERT_AUTH_SQL = `INSERT into auth(email, hashed_password, person_id) VALUES($1, $2, $3)`;
    const INSERT_PORTFOLIO_SQL = `INSERT into portfolio(name, person_id) VALUES($1, $2)`;

    const person = await client.query(INSERT_PERSON_SQL, [firstName, lastName]);
    const personId = person.rows[0].id;
    await client.query(INSERT_AUTH_SQL, [email, hashed, personId]);
    await client.query(INSERT_PORTFOLIO_SQL, ['Default Portfolio', personId]); // create a default portfolio when user signs up

    const token = jwt.sign(
      {
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': personId,
        },
      },
      JWT_SECRET
    );

    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  } finally {
    client.release();
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const client = await pgClient.connect();

  try {
    const FETCH_USER = {
      name: 'fetch_user',
      text: `SELECT email, hashed_password, person_id FROM auth WHERE email = $1`,
      values: [email],
    };

    const response = await client.query(FETCH_USER);

    // if a user does not exist in our db
    if (!response.rows.length) {
      return res.status(422).send({ error: 'User does not exist' });
    }

    const hash = response.rows[0].hashed_password;
    const isValid = await comparePassword(password, hash);

    if (isValid) {
      const token = jwt.sign(
        {
          'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': ['user'],
            'x-hasura-default-role': 'user',
            'x-hasura-user-id': response.rows[0].person_id,
          },
        },
        JWT_SECRET
      );
      res.send({ token });
    } else {
      return res.status(422).send({ error: 'Invalid password or email' });
    }
  } catch (err) {
    res.status(422).send(err.message);
  } finally {
    client.release();
  }
});

module.exports = router;
