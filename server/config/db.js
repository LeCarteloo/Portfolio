import mongoose from "mongoose";

// Fuction to connect with MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected with ${conn.connection.host}`);
  } catch (error) {
    console.log(`Conenction error - ${error}`);
    process.exit(1);
  }
};

export { connectDB };
