import Tech from "../models/techModel.js";

// @desc Add a new technology
// @route POST /api/technology
// @access Private
const addTechnology = async (req, res) => {
  try {
    const { name, icon, type } = req.body;

    if (!name || !icon || !type) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    const technology = await Tech.create({
      name,
      icon,
      type,
    });

    res.status(201).json(technology);
  } catch (error) {
    res.status(400).json(error?.message);
  }
};

export { addTechnology };
