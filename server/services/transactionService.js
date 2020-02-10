const repository = require("../repository/transactionRepository");

module.exports = {
  async getReport(req) {
    let transactions = await repository.list(req);
    let response = {
      saldoTotal: 0,
      movimentacoes: []
    };

    transactions.forEach(item => {
      response.saldoTotal += item.dataValues.value;

      let movimentacao = {
        data: item.dataValues.createdAt,
        id: item.dataValues.id,
        tipo: item.dataValues.value > 0 ? "Credito" : "Debito",
        valor: item.dataValues.value,
        descricao: item.dataValues.description
      }
      
      response.movimentacoes.push(movimentacao);
    });
    return response;
  },
  async create(req) {
    return await repository.create(req);
  }
};
