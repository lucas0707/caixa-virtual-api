const Service = require("../services/transactionService");

module.exports = {
  create(req, res) {
    return Service.create(req)
    .then(transaction => res.status(201).send(transaction))
    .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Service.getReport(req)
      .then(transactions => {
        res.status(200).send(transactions);
      })
      .catch(error => res.status(400).send(error));
  }
};
