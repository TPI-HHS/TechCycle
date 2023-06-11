const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");
const Monitor = require("./monitor.model");
const Computer = require("./computer.model");
const Category = require("./category.model");

const seedLaptops = require("./seedData/laptops.json");
const seedDesktops = require("./seedData/desktops.json");
const seedMonitors = require("./seedData/monitors.json");

const Product = db.define(
  "Product",
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
      type: DataTypes.STRING(1200),
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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "Product",
    timestamps: false,
  }
);

Product.belongsTo(Monitor);
Monitor.hasMany(Product);
Product.belongsTo(Computer);
Product.belongsTo(Category);
Category.hasOne(Product);

async function seedData() {
  try {
    await Product.sync({ force: true });
    const createLaptops = await Product.bulkCreate(seedLaptops);
    const createDesktops = await Product.bulkCreate(seedDesktops);
    const createMonitors = await Product.bulkCreate(seedMonitors);
  } catch (err) {
    console.log("failed bulk creation: ", err);
  }
}

seedData();

module.exports = Product;
