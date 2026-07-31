import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import folderRoutes from "./routes/folderRoutes.js";

const app = express();

// ================================
// Middleware
// ================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// ================================
// API Routes
// ================================

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/documents", documentRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/folders", folderRoutes);

// ================================
// Health Check
// ================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 IntelliVault Backend Running Successfully",
  });
});

// ================================
// 404 Route
// ================================

// ================================
// 404 Route
// ================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;