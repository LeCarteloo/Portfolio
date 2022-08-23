import errorHandler from "../middleware/errorMiddleware.js";
import projectRouter from "../api/routes/projectRoutes.js";
import techRouter from "../api/routes/techRoutes.js";
import userRouter from "../api/routes/userRoutes.js";
import { connectDB } from "./db.js";
import express from "express";
import dotenv from "dotenv";

// Creating server
const app = express();

// Using environment variables
dotenv.config();
const port = process.env.PORT;

// Connecting to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Adding routes
app.use("/api/technology", techRouter);
app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);

// Overridding default error handler with custom one
app.use(errorHandler);

// Starting the server on given port
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
