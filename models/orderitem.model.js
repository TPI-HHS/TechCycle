const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const OrderItem = db.define(
  'OrderItem',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'OrderItem',
    timestamps: false,
  }
)

module.exports = OrderItem
