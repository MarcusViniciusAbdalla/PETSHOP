const ServicoModel = require('../models/ServicoModel');

module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index(); // <-----Pedindo os dados para o modelo
    
    return res.render('servicos', { servicos }); // ------> Enviando os dados para a view
  },

  admin:(req,res) => {
    const servicos = ServicoModel.index();
    return res.render('admin-servicos', { servicos });
  },

  editar: (req, res) => {
    return res.render('cadastro-edicao');
  },

  criar: (req , res) => {
    ServicoModel.criar(req.body);
    return res.redirect('servicos/admin');
  }
};

