const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')
const Brand = require('./brand.model')
const Parts = require('./parts.model')

const Computer = db.define(
  'Computer',
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
    modelName: 'Computer',
    timestamps: false,
  }
)

Computer.belongsTo(Brand);
Brand.hasOne(Computer);
Computer.belongsToMany(Parts, { through: 'ComputerPart' });

module.exports = Computer
