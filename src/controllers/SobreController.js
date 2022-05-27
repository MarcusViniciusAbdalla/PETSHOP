const SobreModel = require('../models/SobreModel');

const SobreController = {
  index: (req, res) => {
    res.render('sobre', { sobre });
  }
}

module.exports = SobreController;