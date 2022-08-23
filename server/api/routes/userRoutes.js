import express from "express";
import { protectOwner } from "../../middleware/authMiddleware.js";
import {
  deleteUser,
  getAllUsers,
  registerUser,
  updateUser,
  loginUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.get("/", protectOwner, getAllUsers);
userRouter.post("/register", protectOwner, registerUser);
userRouter.put("/:id", protectOwner, updateUser);
userRouter.delete("/:id", protectOwner, deleteUser);

export default userRouter;
