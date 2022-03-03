const express = require("express");
const router = express.Router();
const ServicosController = require('../controllers/ServicosController')

router.get('/', ServicosController.index);
router.get('/admin' , ServicosController.admin);

// C - Criação de novos serviços 
router.get('/cadastrar' , ServicosController.editar);
router.post('/cadastrar', ServicosController.criar);

module.exports = router;