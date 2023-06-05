const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Payment = db.define(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'Payment',
    timestamps: false,
  }
)

module.exports = Payment
