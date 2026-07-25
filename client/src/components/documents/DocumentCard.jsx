import { useNavigate } from "react-router-dom";
import {
  FileText,
  Download,
  Pencil,
  Trash2,
  Eye,
  Sparkles,
} from "lucide-react";

function DocumentCard({
  document,
  onDelete,
  onRename,
  onAnalyze,
  isAnalyzing,
}) {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(document._id);
  };

  const handleRename = (e) => {
    e.stopPropagation();
    onRename(document._id, document.name);
  };

  const handleAnalyze = (e) => {
    e.stopPropagation();
    onAnalyze(document._id);
  };

  const handlePreview = (e) => {
    e.stopPropagation();
    window.open(document.fileUrl, "_blank");
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    window.open(document.fileUrl, "_blank");
  };

  return (
    <div
      onClick={() => navigate(`/documents/${document._id}`)}
      className="cursor-pointer rounded-2xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Left */}
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
              {new Date(
                document.createdAt
              ).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Preview */}
          <button
            onClick={handlePreview}
            className="rounded-lg p-2 transition hover:bg-gray-100"
            title="Preview"
          >
            <Eye size={18} />
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="rounded-lg p-2 transition hover:bg-gray-100"
            title="Download"
          >
            <Download size={18} />
          </button>

          {/* Rename */}
          <button
            onClick={handleRename}
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

          {/* Analyze */}
          <button
            onClick={handleAnalyze}
            disabled={
              document.isAnalyzed ||
              isAnalyzing
            }
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-white transition ${
              document.isAnalyzed
                ? "cursor-not-allowed bg-green-600"
                : isAnalyzing
                ? "cursor-not-allowed bg-gray-500"
                : "bg-violet-600 hover:bg-violet-700"
            }`}
          >
            <Sparkles size={18} />

            {isAnalyzing
              ? "Analyzing..."
              : document.isAnalyzed
              ? "Analyzed"
              : "Analyze"}
          </button>
        </div>
      </div>

      {/* AI Analysis */}
      {document.isAnalyzed && (
        <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-4">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-violet-700">
            <Sparkles size={20} />
            AI Analysis
          </h3>

          {/* Document Type */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Document Type
            </p>

            <p className="font-medium text-gray-800">
              {document.documentType}
            </p>
          </div>

          {/* Summary */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Summary
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-700">
              {document.aiSummary}
            </p>
          </div>

          {/* Suggested Title */}
          {document.suggestedTitle && (
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase text-gray-500">
                Suggested Title
              </p>

              <p className="font-medium text-gray-800">
                {document.suggestedTitle}
              </p>
            </div>
          )}

          {/* Keywords */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Keywords
            </p>

            <div className="flex flex-wrap gap-2">
              {document.aiTags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-violet-200 px-3 py-1 text-xs font-medium text-violet-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DocumentCard;