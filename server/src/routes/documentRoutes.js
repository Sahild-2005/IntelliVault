import express from "express";

import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

import {
  uploadDocument,
  getDocuments,
  deleteDocument,
  renameDocument,
} from "../controllers/documentController.js";

const router = express.Router();

// Upload Document
router.post(
  "/upload",
  protect,
  upload.single("document"),
  uploadDocument
);

// Get All Documents
router.get(
  "/",
  protect,
  getDocuments
);

// Delete Document
router.delete(
  "/:id",
  protect,
  deleteDocument
);

// Rename Document
router.put(
  "/:id",
  protect,
  renameDocument
);

export default router;