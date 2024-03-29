const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductValidator = [
  check("name", "name error")
    .exists()
    .withMessage("name is mandatory")
    .notEmpty()
    .withMessage("name can't be empty")
    .isString()
    .withMessage("name must be string")
    .isLength({ max: 50 })
    .withMessage("name can have max 50 characters"),
  check("price", "price error")
    .exists()
    .withMessage("price is mandatory")
    .notEmpty()
    .withMessage("price can't be empty")
    .isDecimal()
    .withMessage("price must be decimal"),

  validateResult,
];

// Si utilizo un validador de esta manera me obliga poner todos los campos que se
// validan y ocupo que se pueda editar toda la información asi como un solo campo.
// const editProductInfoValidator = [
//   check("name", "name error")
//     .isString()
//     .withMessage("name must be string")
//     .isLength({ max: 50 })
//     .withMessage("name can have max 50 characters"),
//   check("description", "description error")
//     .isString()
//     .withMessage("description must be string"),
//   check("price", "price error")
//     .isDecimal()
//     .withMessage("price must be decimal"),
//   check("available_qty", "available_qty error")
//     .isInt()
//     .withMessage("available_qty must be integer"),

//   validateResult,
// ];

module.exports = {
  createProductValidator,
  // editProductInfoValidator,
};
