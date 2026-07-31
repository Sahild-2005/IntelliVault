import { useNavigate } from "react-router-dom";
import {
  FileText,
  Download,
  Pencil,
  Trash2,
  Eye,
  Sparkles,
  Share2,
} from "lucide-react";

function DocumentCard({
  document,
  onDelete,
  onRename,
  onAnalyze,
  onShare,
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

  const handleShare = (e) => {
    e.stopPropagation();
    onShare(document);
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
      className="cursor-pointer rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Left */}
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-500/20">
            <FileText
              className="text-blue-600 dark:text-blue-400"
              size={26}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {document.name}
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              {document.fileType}
            </p>

            <p className="text-sm text-muted-foreground">
              {(document.fileSize / 1024).toFixed(2)} KB
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Uploaded on{" "}
              {new Date(document.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Preview */}
          <button
            onClick={handlePreview}
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-blue-500"
            title="Preview"
          >
            <Eye size={18} />
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-green-500"
            title="Download"
          >
            <Download size={18} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="rounded-lg p-2 transition hover:bg-blue-500/10"
            title="Share"
          >
            <Share2
              size={18}
              className="text-blue-600 dark:text-blue-400"
            />
          </button>

          {/* Rename */}
          <button
            onClick={handleRename}
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-yellow-500"
            title="Rename"
          >
            <Pencil size={18} />
          </button>

          {/* Delete */}
          <button
            onClick={handleDelete}
            className="rounded-lg p-2 text-red-500 transition hover:bg-red-500/10 hover:text-red-600"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>

          {/* Analyze */}
          <button
            onClick={handleAnalyze}
            disabled={document.isAnalyzed || isAnalyzing}
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
        <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-50 p-5 transition-colors duration-300 dark:bg-violet-500/10">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-violet-700 dark:text-violet-300">
            <Sparkles size={20} />
            AI Analysis
          </h3>

          {/* Document Type */}
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Document Type
            </p>

            <p className="mt-1 font-medium text-foreground">
              {document.documentType}
            </p>
          </div>

          {/* Summary */}
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Summary
            </p>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {document.aiSummary}
            </p>
          </div>

          {/* Suggested Title */}
          {document.suggestedTitle && (
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Suggested Title
              </p>

              <p className="mt-1 font-medium text-foreground">
                {document.suggestedTitle}
              </p>
            </div>
          )}

          {/* Keywords */}
          {document.aiTags?.length > 0 && (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Keywords
              </p>

              <div className="flex flex-wrap gap-2">
                {document.aiTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DocumentCard;