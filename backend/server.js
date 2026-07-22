import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// =============================
// Middleware
// =============================
app.use(cors());
app.use(express.json());

// =============================
// Home Route
// =============================
app.get("/", (req, res) => {
  res.send("🚀 Welcome to OneHub API");
});

// =============================
// MongoDB Connection
// =============================
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

connectDB();

// =============================
// Test API
// =============================
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "OneHub Backend Working Successfully",
  });
});

// =============================
// Start Server
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});