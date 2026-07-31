import { useState } from "react";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import { uploadDocument } from "../../services/documentService";
import { useFolders } from "../../context/FolderContext";

function UploadDocument() {
  const [file, setFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [loading, setLoading] = useState(false);

  const { folders = [] } = useFolders();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    try {
      setLoading(true);

      const data = await uploadDocument(file, selectedFolder);

      toast.success(data.message);

      setFile(null);
      setSelectedFolder("");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            Upload Document
          </h1>

          <p className="mt-2 text-muted-foreground">
            Upload PDFs, Images or Word Documents.
          </p>
        </div>

        {/* Upload Card */}
        <div className="rounded-2xl border-2 border-dashed border-border bg-card p-16 text-center shadow-sm transition-colors duration-300">

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20">
            <Upload
              size={48}
              className="text-blue-600 dark:text-blue-400"
            />
          </div>

          {/* Folder Selection */}
          <div className="mx-auto mb-6 max-w-md text-left">

            <label className="mb-2 block font-medium text-foreground">
              Folder
            </label>

            <select
              value={selectedFolder}
              onChange={(e) =>
                setSelectedFolder(e.target.value)
              }
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            >
              <option value="">
                No Folder
              </option>

              {folders.map((folder) => (
                <option
                  key={folder._id}
                  value={folder._id}
                >
                  {folder.name}
                </option>
              ))}
            </select>

          </div>

          {/* File Input */}
          <div className="mx-auto mb-6 max-w-md">

            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:font-medium file:text-white hover:file:bg-blue-700"
            />

          </div>

          {/* Selected File */}
          {file && (
            <div className="mx-auto mb-6 max-w-md rounded-xl border border-border bg-background p-4 text-left">

              <h3 className="font-semibold text-foreground">
                Selected File
              </h3>

              <p className="mt-2 break-all text-muted-foreground">
                {file.name}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {(file.size / 1024).toFixed(2)} KB
              </p>

            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-60"
          >
            {loading
              ? "Uploading..."
              : "Upload Document"}
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default UploadDocument;