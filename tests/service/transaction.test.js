const service = require("../../server/services/transactionService");
const transaction = require("../../server/repository/transactionRepository");

test("should create transaction", async () => {
  const mock = jest.spyOn(transaction, "create");
  mock.mockImplementation(() =>
    Promise.resolve({
      message: "created"
    })
  );
  let res = await service.create({
    description: "Venda de produtos",
    value: -10
  });
  expect(res.message).toBe("created");
});

test("should build report", async () => {
  const mock = jest.spyOn(transaction, "list");

  mock.mockImplementation(() =>
    Promise.resolve([
      {
        dataValues: {
          id: 12,
          description: "Venda de produtos",
          value: 100,
          createdAt: "2020-02-09T17:25:01.643Z",
          updatedAt: "2020-02-09T17:25:01.643Z"
        }
      },
      {
        dataValues: {
          id: 13,
          description: "Compra de produtos",
          value: -80,
          createdAt: "2020-02-09T17:25:01.643Z",
          updatedAt: "2020-02-09T17:25:01.643Z"
        }
      }
    ])
  );

  let res = await service.getReport({});

  expect(res).toStrictEqual({
    saldoTotal: 20,
    movimentacoes: [
      {
        data: "2020-02-09T17:25:01.643Z",
        id: 12,
        tipo: "Credito",
        valor: 100,
        descricao: "Venda de produtos"
      },
      {
        data: "2020-02-09T17:25:01.643Z",
        id: 13,
        tipo: "Debito",
        valor: -80,
        descricao: "Compra de produtos"
      }
    ]
  });
});
