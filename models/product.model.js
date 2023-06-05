const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/database')
const Monitor = require('./monitor.model');
const Computer = require('./computer.model');
const Category = require('./category.model');

const Product = db.define(
  'Product',
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
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stocklevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize: db,
    modelName: 'Product',
    timestamps: false,
  }
)

Product.belongsTo(Monitor);
Monitor.hasMany(Product);
Product.belongsTo(Computer);
Product.belongsTo(Category);
Category.hasOne(Product);

module.exports = Product
