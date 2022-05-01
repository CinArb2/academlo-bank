const express = require('express');

const { getAllTransfers,
  // createNewUser,
  // getUserByID,
  // updateUser,
  // deleteUser
} = require('../controllers/transfers.controllers')

const router = express.Router()

router.route('/')
  .get(getAllTransfers)

module.exports = {transferRouter: router}