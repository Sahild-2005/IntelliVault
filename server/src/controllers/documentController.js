import { Readable } from "stream";
import cloudinary from "../utils/cloudinary.js";
import Document from "../models/Document.js";
import { analyzeDocumentWithAI } from "../services/documentAIService.js";
import { chatWithDocument } from "../services/chatWithDocumentService.js";

// =======================
// Upload Document
// =======================
export const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const stream = Readable.from(req.file.buffer);

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "IntelliVault",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      stream.pipe(uploadStream);
    });

    const document = await Document.create({
      name: req.file.originalname,
      originalName: req.file.originalname,
      fileUrl: result.secure_url,
      publicId: result.public_id,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      uploadedBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Document uploaded successfully",
      document,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get Documents
// =======================
export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({
      uploadedBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      documents,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get Single Document
// =======================
export const getDocumentById = async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      uploadedBy: req.user._id,
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    res.status(200).json({
      success: true,
      document,
    });
  } catch (error) {
    console.error("Get Document Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// =======================
// Delete Document
// =======================
export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      uploadedBy: req.user._id,
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    await cloudinary.uploader.destroy(document.publicId, {
      resource_type: "raw",
    });

    await document.deleteOne();

    res.status(200).json({
      success: true,
      message: "Document deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Rename Document
// =======================
export const renameDocument = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Document name is required",
      });
    }

    const document = await Document.findOne({
      _id: req.params.id,
      uploadedBy: req.user._id,
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    document.name = name.trim();

    await document.save();

    res.status(200).json({
      success: true,
      message: "Document renamed successfully",
      document,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Analyze Document with AI
// =======================
export const analyzeDocument = async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      uploadedBy: req.user._id,
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    // Already analyzed
    if (document.isAnalyzed) {
      return res.status(200).json({
        success: true,
        message: "Document already analyzed",
        document,
      });
    }

    const aiResult = await analyzeDocumentWithAI(document.fileUrl);

    console.log("========== AI RESULT ==========");
    console.log(aiResult);

    // Save AI data
    document.aiSummary = aiResult.summary || "";
    document.aiTags = aiResult.keywords || [];
    document.documentType = aiResult.documentType || "";
    document.suggestedTitle = aiResult.suggestedTitle || "";

    // Rename using AI title
    if (aiResult.suggestedTitle) {
      document.name = aiResult.suggestedTitle;
    }

    document.isAnalyzed = true;
    document.summaryGenerated = true;
    document.ocrProcessed = true;

    await document.save();

    console.log("========== SAVED DOCUMENT ==========");
    console.log(document);
    console.log("===================================");

    res.status(200).json({
      success: true,
      message: "Document analyzed successfully",
      document,
    });
  } catch (error) {
    console.error("AI Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Chat With Document
// =======================
export const chatDocument = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    const document = await Document.findOne({
      _id: req.params.id,
      uploadedBy: req.user._id,
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    const answer = await chatWithDocument(
      document.fileUrl,
      question
    );

    res.status(200).json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("Chat Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};