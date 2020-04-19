const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hashedPassword;
};

const comparePassword = async (password, hash) => {
  return new Promise((resolve, error) => {
    bcrypt.compare(password, hash, (err, success) => {
      if (err) {
        return error(err);
      }
      resolve(success);
    });
  });
};

module.exports = {
  hashPassword,
  comparePassword,
};
