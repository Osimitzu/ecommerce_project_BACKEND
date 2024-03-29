"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Tengo que comentar las relaciones, si no, no me funcionan los endpoints...
      roles.hasMany(models.users, { foreignKey: "role_id" });
    }
  }
  roles.init(
    {
      role: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "roles",
    }
  );
  return roles;
};
