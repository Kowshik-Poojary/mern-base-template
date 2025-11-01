import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import recordRoutes from "./routes/recordRoutes.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/records", recordRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
