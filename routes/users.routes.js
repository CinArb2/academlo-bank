const express = require('express');

const { signUpUser,
  loginUser
  // getUserByID,
  // updateUser,
  // deleteUser
} = require('../controllers/users.controllers')

const router = express.Router()

router.post('/signup', signUpUser)
router.post('/login', loginUser)

module.exports = {usersRouter: router}