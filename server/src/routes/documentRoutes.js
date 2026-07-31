import express from "express";

import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

import {
  uploadDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
  renameDocument,
  analyzeDocument,
  chatDocument,
  shareDocument,
  getSharedDocument,
} from "../controllers/documentController.js";

const router = express.Router();

// ======================================================
// Public Shared Document (NO AUTH)
// ======================================================
router.get(
  "/shared/:token",
  getSharedDocument
);

// ======================================================
// Upload Document
// ======================================================
router.post(
  "/upload",
  protect,
  upload.single("document"),
  uploadDocument
);

// ======================================================
// Get All Documents
// ======================================================
router.get(
  "/",
  protect,
  getDocuments
);

// ======================================================
// Get Single Document
// ======================================================
router.get(
  "/:id",
  protect,
  getDocumentById
);

// ======================================================
// Rename Document
// ======================================================
router.put(
  "/:id",
  protect,
  renameDocument
);

// ======================================================
// Delete Document
// ======================================================
router.delete(
  "/:id",
  protect,
  deleteDocument
);

// ======================================================
// Analyze Document
// ======================================================
router.post(
  "/:id/analyze",
  protect,
  analyzeDocument
);

// ======================================================
// Share Document
// ======================================================
router.post(
  "/:id/share",
  protect,
  shareDocument
);

// ======================================================
// Chat With Document
// ======================================================
router.post(
  "/:id/chat",
  protect,
  chatDocument
);

export default router;