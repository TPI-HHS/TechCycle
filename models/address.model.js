const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");

const Address = db.define(
  "Address",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    addressline1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressline2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Address",
    timestamps: false,
  }
);

module.exports = Address;
