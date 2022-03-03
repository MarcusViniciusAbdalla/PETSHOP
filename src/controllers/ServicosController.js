const ServicoModel = require('../models/ServicoModel');

module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index(); // <-----Pedindo os dados para o modelo
    
    return res.render('servicos', { servicos }); // ------> Enviando os dados para a view
  },

  admin:(req,res) => {
    const servicos = ServicoModel.index();
    return res.render('admin-servicos', { servicos });
  }
};

