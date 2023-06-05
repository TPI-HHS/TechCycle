const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')
const Customer = require('./customer.model')
const Employee = require('./employee.model')

const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'customer',
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'User',
    timestamps: false,
  }
)

User.hasOne(Customer, { foreignKey: { allowNull: true }, constraints: false });
User.hasOne(Employee, { foreignKey: { allowNull: true }, constraints: false });
Employee.belongsTo(User);
Customer.belongsTo(User);

module.exports = User
