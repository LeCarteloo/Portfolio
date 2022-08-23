import express from "express";
import { protectOwner } from "../../middleware/authMiddleware.js";
import {
  addProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.get("/", getAllProjects);
projectRouter.post("/", protectOwner, addProject);
projectRouter.put("/", protectOwner, updateProject);
projectRouter.delete("/", protectOwner, deleteProject);

export default projectRouter;
