import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../api/models/userModel.js";

const protectOwner = asyncHandler(async (req, res, next) => {
  // Checking if bearer token is provided
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    res.status(401);
    throw new Error("Token not provided - Not authorized");
  }

  /* Getting the token from header (Bearer) build like: Bearer <token> */
  const token = req.headers.authorization.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Adding user id as a payload to the request
  const user = await User.findById(decoded.id).select("_id isOwner");

  // Route only for Owner
  if (!user.isOwner) {
    res.status(403);
    throw new Error("Not authorized");
  }

  req.user = user;

  next();
});

export { protectOwner };
