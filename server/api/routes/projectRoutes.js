import express from "express";
import {
  addProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from "../controllers/projectController.js";

const projectRouter = express.Router();

projectRouter.get("/", getAllProjects);
projectRouter.post("/", addProject);
projectRouter.put("/", updateProject);
projectRouter.delete("/", deleteProject);

export default projectRouter;
