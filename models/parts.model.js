const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')

const Parts = db.define(
  'Parts',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cpu: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ram: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ssd: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hdd: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gpu: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize: db,
    modelName: 'Parts',
    timestamps: false,
  }
)

module.exports = Parts
