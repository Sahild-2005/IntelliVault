import Folder from "../models/Folder.js";
import Document from "../models/Document.js";

// ======================================
// Create Folder
// ======================================

export const createFolder = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Folder name is required",
      });
    }

    const existingFolder = await Folder.findOne({
      user: req.user._id,
      name: name.trim(),
    });

    if (existingFolder) {
      return res.status(400).json({
        success: false,
        message: "Folder already exists",
      });
    }

    const folder = await Folder.create({
      name: name.trim(),
      user: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Folder created successfully",
      folder,
    });
  } catch (error) {
    console.error("Create Folder Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ======================================
// Get All Folders
// ======================================

export const getFolders = async (req, res) => {
  try {
    const folders = await Folder.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      folders,
    });
  } catch (error) {
    console.error("Get Folder Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ======================================
// Rename Folder
// ======================================

export const renameFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Folder name is required",
      });
    }

    const existingFolder = await Folder.findOne({
      user: req.user._id,
      name: name.trim(),
      _id: { $ne: id },
    });

    if (existingFolder) {
      return res.status(400).json({
        success: false,
        message: "Folder with this name already exists",
      });
    }

    const folder = await Folder.findOneAndUpdate(
      {
        _id: id,
        user: req.user._id,
      },
      {
        name: name.trim(),
      },
      {
        new: true,
      }
    );

    if (!folder) {
      return res.status(404).json({
        success: false,
        message: "Folder not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Folder renamed successfully",
      folder,
    });
  } catch (error) {
    console.error("Rename Folder Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ======================================
// Delete Folder
// ======================================

export const deleteFolder = async (req, res) => {
  try {
    const { id } = req.params;

    const folder = await Folder.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!folder) {
      return res.status(404).json({
        success: false,
        message: "Folder not found",
      });
    }

    // Remove folder reference from documents
    await Document.updateMany(
      {
        folder: folder._id,
      },
      {
        $set: {
          folder: null,
        },
      }
    );

    await Folder.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Folder deleted successfully",
    });
  } catch (error) {
    console.error("Delete Folder Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};