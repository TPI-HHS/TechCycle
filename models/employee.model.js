const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Employee = db.define(
  'Employee',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'Employee',
    timestamps: false,
  }
)

module.exports = Employee
