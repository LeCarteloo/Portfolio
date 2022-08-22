import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import errorHandler from "../middleware/errorHandler.js";

// Creating server
const app = express();

// Using environment variables
dotenv.config();
const port = process.env.PORT;

// Overridding default error handler with custom one
app.use(errorHandler);

// Connecting to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;

// Starting the server on given port
// Starting the server on given portn
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
