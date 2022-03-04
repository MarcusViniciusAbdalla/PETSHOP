const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null , 'public/images/uploads')
  },

  filename(req, file, callback) {
    const [filename, extension] = file.originalname.split('.'); // [ banho , jpeg ]
    callback(null , filename + '-'+ Date.now() + '.' + extension)  //banho 20210222.jpeg
  }
})

// C - Criação de novos serviços
router.get('/cadastrar', ServicosController.editar);
router.post('/cadastrar', ServicosController.criar);

// R - Leitura de serviços
router.get('/', ServicosController.index);
router.get('/admin', ServicosController.admin);

// U - Atualização de serviços
router.get('/editar/:id', ServicosController.editar);
router.put('/editar/:id', ServicosController.atualizar);

// D - Deleção de Serviços
router.delete('/deletar/:id', ServicosController.deletar);

module.exports = router;