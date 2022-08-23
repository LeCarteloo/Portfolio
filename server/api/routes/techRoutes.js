import express from "express";
import {
  addTechnology,
  deleteTechnology,
  getAllTechnologies,
  updateTechnology,
} from "../controllers/techController.js";

// Creating router for technology model
const techRouter = express.Router();

// Technology routes
techRouter.get("/", getAllTechnologies);
techRouter.post("/", addTechnology);
techRouter.put("/:id", updateTechnology);
techRouter.delete("/:id", deleteTechnology);

export default techRouter;
