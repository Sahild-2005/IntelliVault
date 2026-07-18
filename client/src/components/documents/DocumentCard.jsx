import {
  FileText,
  Download,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

function DocumentCard({
  document,
  onDelete,
  onRename,
}) {
  const handleDelete = () => {
    onDelete(document._id);
  };

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-lg">
      <div className="flex items-start justify-between">
        {/* Left Section */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-100 p-3">
            <FileText
              className="text-blue-600"
              size={26}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              {document.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {document.fileType}
            </p>

            <p className="text-sm text-gray-500">
              {(document.fileSize / 1024).toFixed(2)} KB
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Uploaded on{" "}
              {new Date(document.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Preview */}
          <button
            onClick={() => window.open(document.fileUrl, "_blank")}
            className="rounded-lg p-2 transition hover:bg-gray-100"
            title="Preview"
          >
            <Eye size={18} />
          </button>

          {/* Download */}
          <button
            onClick={() => window.open(document.fileUrl, "_blank")}
            className="rounded-lg p-2 transition hover:bg-gray-100"
            title="Download"
          >
            <Download size={18} />
          </button>

          {/* Rename */}
          <button
            onClick={() =>
              onRename(document._id, document.name)
            }
            className="rounded-lg p-2 transition hover:bg-gray-100"
            title="Rename"
          >
            <Pencil size={18} />
          </button>

          {/* Delete */}
          <button
            onClick={handleDelete}
            className="rounded-lg p-2 text-red-600 transition hover:bg-red-100"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentCard;