import express from "express";

import {
  createFolder,
  getFolders,
  renameFolder,
  deleteFolder,
} from "../controllers/folderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes require authentication
router.use(protect);

// Create Folder
router.post("/", createFolder);

// Get All Folders
router.get("/", getFolders);

// Rename Folder
router.put("/:id", renameFolder);

// Delete Folder
router.delete("/:id", deleteFolder);

export default router;