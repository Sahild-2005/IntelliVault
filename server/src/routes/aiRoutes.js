import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { testGemini } from "../controllers/aiController.js";

const router = express.Router();

router.get("/test", protect, testGemini);

export default router;