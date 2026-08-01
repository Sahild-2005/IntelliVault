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
// CORS Configuration
// ================================

const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, Render health checks, etc.)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ================================
// Middleware
// ================================

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

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;