import express from "express";
import { addTechnology } from "../controllers/techController.js";

// Creating router for technology model
const techRouter = express.Router();

// Technology routes
techRouter.post("/", addTechnology);

export default techRouter;
