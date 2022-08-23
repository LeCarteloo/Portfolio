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
techRouter.put("/", updateTechnology);
techRouter.delete("/", deleteTechnology);

export default techRouter;
