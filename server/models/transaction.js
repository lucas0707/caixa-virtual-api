"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      description: DataTypes.STRING,
      value: DataTypes.INTEGER,
    },
    {}
  );
  Transaction.associate = function(models) {};
  return Transaction;
};
