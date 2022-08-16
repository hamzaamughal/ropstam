const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, 'somesecret', {
    expiresIn: '90m',
  })
}

module.exports = generateToken;
