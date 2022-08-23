import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// @desc Get all users
// @route GET /api/users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

// @desc Add user
// @route POST /api/users/register
// @access Private
const registerUser = asyncHandler(async (req, res) => {
  const { name, surname, email, password } = req.body;

  if (!name || !surname || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Future JWT token generation here

  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
  });

  res.status(201).json(newUser);
});

// @desc Login
// @route POST /api/users/login
// @access Public
// Will be implemented in future
const loginUser = asyncHandler(async (req, res) => {});

// @desc Logout
// @route POST /api/users/logout
// @access Private
// Will be implemented in future
const logoutUser = asyncHandler(async (req, res) => {});

export { getAllUsers, registerUser };
