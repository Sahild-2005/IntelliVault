import Document from "../models/Document.js";

export const getDashboardStats = async (req, res) => {
  try {
    const documents = await Document.find({
      uploadedBy: req.user._id,
    });

    const totalDocuments = documents.length;

    const analyzedDocuments = documents.filter(
      (doc) => doc.isAnalyzed
    ).length;

    const storageUsed = documents.reduce(
      (total, doc) => total + doc.fileSize,
      0
    );

    const folders = [
      ...new Set(
        documents.map((doc) => doc.folder || "My Documents")
      ),
    ].length;

    const recentDocuments = documents
      .sort(
        (a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
      )
      .slice(0, 5);

    res.status(200).json({
      success: true,
      stats: {
        totalDocuments,
        analyzedDocuments,
        storageUsed,
        folders,
        recentDocuments,
      },
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};