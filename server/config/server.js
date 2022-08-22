import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

// Creating server
const app = express();

// Using environment variables
dotenv.config();

// Connecting to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;

// Starting the server on given portn
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
