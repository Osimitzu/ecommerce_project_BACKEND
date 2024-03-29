"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Tengo que comentar las relaciones, si no, no me funcionan los endpoints...
      // products.belongsTo(models.users, { foreignKey: "user_id" }); // relación eliminada
      // products.hasMany(models.product_in_orders, { foreignKey: "product_id" }); // relacion cambiada a:
      products.belongsToMany(models.orders, {
        through: "product_in_orders",
        foreignKey: "product_id",
      });
      // products.hasMany(models.product_in_cars, { foreignKey: "product_id" }); // relacion cambiada a:
      products.belongsToMany(models.cars, {
        through: "product_in_cars",
        foreignKey: "product_id",
      });
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.REAL,
      available_qty: DataTypes.INTEGER,
      status: DataTypes.ENUM("available", "unavailable"),
      // user_id: DataTypes.INTEGER,
      product_image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
