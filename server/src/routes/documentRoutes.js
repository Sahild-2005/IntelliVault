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
} from "../controllers/documentController.js";

const router = express.Router();

// =======================
// Upload Document
// =======================
router.post(
  "/upload",
  protect,
  upload.single("document"),
  uploadDocument
);

// =======================
// Get All Documents
// =======================
router.get(
  "/",
  protect,
  getDocuments
);

// =======================
// Get Single Document
// =======================
router.get(
  "/:id",
  protect,
  getDocumentById
);

// =======================
// Rename Document
// =======================
router.put(
  "/:id",
  protect,
  renameDocument
);

// =======================
// Delete Document
// =======================
router.delete(
  "/:id",
  protect,
  deleteDocument
);

// =======================
// Analyze Document
// =======================
router.post(
  "/:id/analyze",
  protect,
  analyzeDocument
);

// =======================
// Chat With Document
// =======================
router.post(
  "/:id/chat",
  protect,
  chatDocument
);

export default router;