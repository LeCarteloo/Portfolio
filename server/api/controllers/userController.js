import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Invalid credentials!");
  }

  const isPassCorrect = await bcrypt.compare(password, user.password);

  if (!isPassCorrect) {
    res.status(400);
    throw new Error("Invalid credentials!");
  }

  const token = generateJWT(
    user._id,
    process.env.JWT_SECRET,
    process.env.JWT_SECRET_LIFE
  );

  // Adding JWT token to user model
  await User.findOneAndUpdate({ email }, { token: token });

  res.json({
    _id: user.id,
    name: user.name,
    surname: user.surname,
    token: token,
  });
});

// @desc Logout
// @route POST /api/users/logout
// @access Private
// Will be implemented in future
const logoutUser = asyncHandler(async (req, res) => {});

// @desc Update user by id
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const userExist = await User.findById(req.params.id);

  if (!userExist) {
    res.status(400);
    throw new Error("User doesn't exist");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

// @desc Delete user by id
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const userExist = await User.findById(req.params.id);

  if (!userExist) {
    res.status(400);
    throw new Error("User doesn't exist");
  }

  const deletedUser = await User.findByIdAndDelete(req.params.id);

  res.status(200).json(deletedUser);
});

const generateJWT = (id, secret, life) => {
  return jwt.sign({ id }, secret, { expiresIn: life });
};

export { getAllUsers, registerUser, updateUser, deleteUser, loginUser };
