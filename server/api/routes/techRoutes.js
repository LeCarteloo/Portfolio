import express from "express";
import { protectOwner } from "../../middleware/authMiddleware.js";
import {
  addTechnology,
  deleteTechnology,
  getAllTechnologies,
  updateTechnology,
} from "../controllers/techController.js";

// Creating router for technology model
const techRouter = express.Router();

// Technology routes
techRouter.get("/", protectOwner, getAllTechnologies);
techRouter.post("/", protectOwner, addTechnology);
techRouter.put("/:id", protectOwner, updateTechnology);
techRouter.delete("/:id", protectOwner, deleteTechnology);

export default techRouter;
