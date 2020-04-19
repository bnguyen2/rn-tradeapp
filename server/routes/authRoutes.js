const express = require('express');
const jwt = require('jsonwebtoken');
const { pgClient } = require('../database/pgClient');
const { hashPassword, comparePassword } = require('../helpers/passwordHelper');
const { JWT_SECRET } = require('../secret/index');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashed = await hashPassword(password);

    const client = await pgClient.connect();

    const INSERT_PERSON_SQL = `INSERT into person(first_name, last_name) VALUES($1, $2) RETURNING *`;
    const INSERT_AUTH_SQL = `INSERT into auth(email, hashed_password, person_id) VALUES($1, $2, $3)`;

    const person = await client.query(INSERT_PERSON_SQL, [firstName, lastName]);
    const personId = person.rows[0].id;
    await client.query(INSERT_AUTH_SQL, [email, hashed, personId]);

    const token = jwt.sign(
      {
        firstName,
        lastName,
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
  }
});

router.post('/signin', (req, res) => {});

module.exports = router;
