const transactionsController = require('../controllers').transactions;

module.exports = (app) => {
  app.get('/v1/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/v1/api/transaction', transactionsController.create);
  app.get('/v1/api/transaction', transactionsController.list);
};