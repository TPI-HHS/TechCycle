const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')
const Brand = require('./brand.model')

const Monitor = db.define(
  'Monitor',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize: db,
    modelName: 'Monitor',
    timestamps: false,
  }
)

Monitor.belongsTo(Brand);
Brand.hasOne(Monitor);

module.exports = Monitor
