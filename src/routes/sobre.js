const express = require('express');
const router = express.Router();
const SobreController = require('../controllers/SobreController');

router.get('/sobre' , (req, res) => {
  return res.render('sobre')
})

module.exports = router