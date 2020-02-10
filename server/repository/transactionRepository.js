const Transaction = require("../models").Transaction;

module.exports = {
    async create(req) {
      return await Transaction.create({
        description: req.body.description,
        value: req.body.value,
        date: new Date()
      })
    },
    async list(req) {
      return await Transaction.findAll();
    }
  };