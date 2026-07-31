import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    folder: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Folder",
  default: null,
},

    // ===========================
    // AI DATA
    // ===========================

    extractedText: {
      type: String,
      default: "",
    },

    aiSummary: {
      type: String,
      default: "",
    },

    aiTags: {
      type: [String],
      default: [],
    },

    documentType: {
      type: String,
      default: "",
    },

    suggestedTitle: {
      type: String,
      default: "",
    },

    isAnalyzed: {
      type: Boolean,
      default: false,
    },

    ocrProcessed: {
      type: Boolean,
      default: false,
    },

    summaryGenerated: {
      type: Boolean,
      default: false,
    },
    // ===========================
// Sharing
// ===========================

isShared: {
  type: Boolean,
  default: false,
},

shareToken: {
  type: String,
  default: "",
},

shareExpiry: {
  type: Date,
  default: null,
},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Document", documentSchema);  