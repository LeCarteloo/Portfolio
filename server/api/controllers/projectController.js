import Project from "../models/projectModel.js";
import asyncHandler from "express-async-handler";

// @desc Get all projects
// @route GET /api/projects
// @access Public
const getAllProjects = asyncHandler(async (req, res) => {
  //   const projects = await Project.find();

  const projects = await Project.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "team",
        foreignField: "_id",
        as: "ref",
      },
    },
    {
      $project: {
        name: 1,
        hours: 1,
        links: 1,
        team: [
          {
            name: { $first: "$ref.name" },
            surname: { $first: "$ref.surname" },
            links: { $first: "$ref.links" },
            email: { $first: "$ref.email" },
          },
        ],
        technologies: 1,
        colors: 1,
        content: 1,
      },
    },
  ]);

  res.status(200).json(projects);
});

// @desc Add project
// @route POST /api/projects
// @access Private
const addProject = asyncHandler(async (req, res) => {
  const { name, content } = req.body;

  if (!name || !content) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const projectExist = await Project.findOne({ name: name });

  if (projectExist) {
    res.status(400);
    throw new Error("Project already exists");
  }

  const newProject = await Project.create(req.body);

  res.status(200).json(newProject);
});

// @desc Update project by id
// @route PUT /api/projects/:id
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  const projectExist = await Project.findById(req.params.id);

  if (!projectExist) {
    res.status(400);
    throw new Error("Project doesn't exist");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProject);
});

// @desc Delete project by id
// @route DELETE /api/projects/:id
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const projectExist = await Project.findById(req.params.id);

  if (!projectExist) {
    res.status(400);
    throw new Error("Project doesn't exist");
  }

  const deletedProject = await Project.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedProject);
});

export { getAllProjects, addProject, updateProject, deleteProject };
