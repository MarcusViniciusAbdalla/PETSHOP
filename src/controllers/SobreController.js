const SobreModel = require('../models/SobreModel');
const { validationResult } = require('express-validator');

module.exports = {
  index: (req, res) => {
    return res.render('sobre')
  }
}