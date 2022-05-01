const { User } = require('../models/user.model')


const signUpUser = async (req, res) => {
  try {
    //SELECT * from users
    const { name, password } = req.body
    
    const accountNumber = Math.floor(Math.random()*1000000)

    const newUser = await User.create(
    {
      name,
      password,
      accountNumber
    })

    res.status(201).json({ newUser });

  } catch (error) {
    console.log(error);
  }
}
//como hago la autenticacion? genero token?
const loginUser = async (req, res) => {
  try {
    //SELECT * from users
    const { accountNumber, password } = req.body
    
    const accountLogin = await User.findOne({ where: { accountNumber } })

    if (!accountLogin) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that accountnumber',
      });
    }
    
    if (accountLogin.password !== password) {
      return res.status(404).json({
        status: 'error',
        message: 'password is not valid',
      });
    }

    res.status(200).json({
      accountLogin,
    });

  } catch (error) {
    console.log(error);
  }
}
// piden :id:history pero debo tener al usuario auten

module.exports = {
  signUpUser,
  loginUser
};