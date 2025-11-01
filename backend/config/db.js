import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern_base"); // Change DB name
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
  }
};

export default connectDB;
