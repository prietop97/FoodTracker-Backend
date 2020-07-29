const Truck = require("../models/Truck");

const validateTruck = async (req, res, next) => {
  try {
    const { id } = req.params;
    const truck = await Truck.findById(id);
    if (!truck)
      return res.status(404).json({ error: "No truck found with this id" });
    req.truck = truck;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server malfunctioning" });
  }
};

module.exports = validateTruck;
