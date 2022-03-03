const { uuid } = require('uuidv4');

module.exports = {
  servicos: [
    {
      nome: 'Banho' , 
      valor: 'R$ 30,00' , 
      descricao: 'Higienização Completa' 
    },
    { 
      nome: 'Tosa' , 
      valor: 'R$ 15,00' , 
      descricao: 'Tosa Completa' 
    },
    { 
      nome: 'Corte de Unhas' , 
      valor: 'R$ 5,00' , 
      descricao: 'Corte de unhas e lixar' 
    },
    {
      nome: 'Hidratação' , 
      valor: 'R$ 40,00' , 
      descricao: 'Hidratação completa da pelagem' 
    },
    {
      nome: 'Tingimento dos pêlos' , 
      valor: 'R$ 100,00' , 
      descricao: 'Tingimento toda pelagem' 
    },
  ],

  index () {
    return this.servicos
  },

  criar({ nome, valor, descricao }) {
    if (!nome || !valor || !descricao) return
    
    this.servicos.push( {id: uuid(), nome, valor, descricao} )
  },

  buscar (id) {
    return this.servicos.find(servico => servico.id == id)
  },

  atualizar (id, { nome, valor , descricao }) {
    if (!id) return

    if (!nome || valor || descricao) return

    const servico = this.buscar(id);

    servico.nome = nome;
    servico.valor = valor;
    servico.descricao = descricao;
  }
}