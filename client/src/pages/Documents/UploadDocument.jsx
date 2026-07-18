import { useState } from "react";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import { uploadDocument } from "../../services/documentService";

function UploadDocument() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log("Upload button clicked");
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    try {
      setLoading(true);

      const data = await uploadDocument(file);

      toast.success(data.message);

      console.log(data);

      setFile(null);

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Upload Document
          </h1>

          <p className="mt-2 text-gray-500">
            Upload PDFs, Images or Word Documents.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-dashed bg-white p-16 text-center">

          <Upload
            size={70}
            className="mx-auto mb-5 text-blue-600"
          />

          <input
            type="file"
            onChange={handleFileChange}
            className="mx-auto mb-6 block"
          />

          {file && (
            <div className="mb-5">
              <h3 className="font-semibold">
                Selected File
              </h3>

              <p className="text-gray-600">
                {file.name}
              </p>

              <p className="text-sm text-gray-500">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
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