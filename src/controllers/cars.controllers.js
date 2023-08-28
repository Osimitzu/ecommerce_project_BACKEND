const carsServices = require("../services/cars.services");

const addProductToCarCTRL = async (req, res, next) => {
  try {
    const { product_id, price, quantity } = req.body;
    const car_id = parseInt(req.params.id, 10);
    if (isNaN(car_id)) {
      return res.status(400).json({ error: "Invalid car ID" });
    }

    await carsServices.addProductToCarSRVC(product_id, price, quantity, car_id);
    res.status(200).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addProductToCarCTRL,
};