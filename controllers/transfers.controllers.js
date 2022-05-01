const { TRANSFER } = require('../models/transfer.model')

const getAllTransfers = async (req, res) => {
  try {
    //SELECT * from users
    const transfers = await TRANSFER.findAll();

    res.status(200).json({
      transfers
    });

  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTransfers,
};