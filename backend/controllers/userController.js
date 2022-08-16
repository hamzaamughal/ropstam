const { generateRandomPassword } = require('../helpers/otp');
const { sendPasswordMail } = require('../helpers/email-util');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../helpers/generateToken');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }


  const generatedPassword = generateRandomPassword();

  await sendPasswordMail(email, generatedPassword);
  const user = await User.create({
    name,
    email,
    generatedPassword
  })

  res.status(201).json({
    success: true,
    data: user
  })
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  const user = await User.findOne({ email });

  const token = generateToken(user._id);

  console.log(user);

  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }

  if (user.generatedPassword !== password) {
    res.status(400)
    throw new Error('Password is incorrect')
  }

  res.status(200).json({
    success: true,
    token,
    data: user,
  })
})

module.exports = {
  registerUser,
  loginUser
}