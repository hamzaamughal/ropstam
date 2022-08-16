const otpGenerator = require('otp-generator')

const generateRandomPassword = () => {
  return otpGenerator.generate(4, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
  // return crypto.randomBytes(64).toString('hex');
}

module.exports = {
  generateRandomPassword
}