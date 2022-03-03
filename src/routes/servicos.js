const express = require("express");
const router = express.Router();
const ServicosController = require('../controllers/ServicosController')

router.get('/', ServicosController.index);
router.get('/admin' , ServicosController.admin);

module.exports = router;