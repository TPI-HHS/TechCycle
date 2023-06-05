const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')
const OrderItem = require('./orderitem.model')
const Customer = require('./customer.model')
const Payment = require('./payment.model')
const Address = require('./address.model')

const Order = db.define(
  'Order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalprice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'Order',
    timestamps: false,
  }
)

Order.hasOne(Customer);
Customer.belongsTo(Order);
Order.hasOne(Address);
Address.belongsTo(Order);
Order.hasOne(Payment);
Payment.belongsTo(Order);
Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

module.exports = Order
