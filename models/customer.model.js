const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')
const Address = require('./address.model')

const Customer = db.define(
  'Customer',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    addressid: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middelname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'Customer',
    timestamps: false,
  }
)

Customer.hasOne(Address, { as: 'customerAddress' }, { foreignKey: { allowNull: true }, constraints: false });
Address.belongsTo(Customer);

module.exports = Customer
