import Tech from "../models/techModel.js";
import asyncHandler from "express-async-handler";

// @desc Add a new technology
// @route POST /api/technology
// @access Private
const addTechnology = asyncHandler(async (req, res) => {
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
});

// @desc Get all technologies
// @route GET /api/technology
// @access Private
const getAllTechnologies = asyncHandler(async (req, res) => {
  const technologies = await Tech.find();

  res.status(200).json(technologies);
});

// @desc Update technology by id
// @route PUT /api/technology/:id
// @access Private
const updateTechnology = asyncHandler(async (req, res) => {
  const technologyExist = await Tech.findById(req.params.id);

  if (!technologyExist) {
    res.status(400);
    throw new Error("Technology doesn't exist");
  }

  const updatedTechnology = await Tech.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTechnology);
});

// @desc Delete technology by id
// @route DELETE /api/technology
// @access Private
const deleteTechnology = asyncHandler(async (req, res) => {
  const technologyExist = await Tech.findById(req.params.id);

  if (!technologyExist) {
    res.status(400);
    throw new Error("Technology doesn't exist");
  }

  const deletedTechnology = await Tech.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedTechnology);
});

export {
  getAllTechnologies,
  addTechnology,
  updateTechnology,
  deleteTechnology,
};
