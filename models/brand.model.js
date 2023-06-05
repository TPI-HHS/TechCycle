const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Brand = db.define(
  'Brand',
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'Brand',
    timestamps: false,
  }
)

module.exports = Brand
