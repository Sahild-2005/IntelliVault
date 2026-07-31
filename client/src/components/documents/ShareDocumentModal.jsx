import { useState } from "react";
import toast from "react-hot-toast";
import { X, Share2, Copy, Check } from "lucide-react";

import { shareDocument } from "../../services/shareService";

function ShareDocumentModal({
  isOpen,
  onClose,
  document,
}) {
  const [loading, setLoading] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [copied, setCopied] = useState(false);

  if (!isOpen || !document) return null;

  const handleGenerateLink = async () => {
    try {
      setLoading(true);

      const data = await shareDocument(document._id);

      setShareLink(data.shareLink);

      toast.success("Share link generated!");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to generate share link"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!shareLink) return;

    await navigator.clipboard.writeText(shareLink);

    setCopied(true);

    toast.success("Link copied!");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <Share2 size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Share Document
              </h2>

              <p className="text-sm text-muted-foreground">
                Generate a secure shareable link.
              </p>
            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X size={20} />
          </button>

        </div>

        {/* Document */}
        <div className="mb-6 rounded-xl border border-border bg-background p-4">

          <p className="text-sm font-medium text-muted-foreground">
            Document
          </p>

          <h3 className="mt-2 break-words font-semibold text-foreground">
            {document.name}
          </h3>

        </div>

        {!shareLink ? (
          <button
            onClick={handleGenerateLink}
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Generating..."
              : "Generate Share Link"}
          </button>
        ) : (
          <>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Share Link
            </label>

            <div className="flex gap-2">

              <input
                readOnly
                value={shareLink}
                className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none"
              />

              <button
                onClick={handleCopy}
                className="rounded-xl bg-blue-600 px-4 text-white transition hover:bg-blue-700"
              >
                {copied ? (
                  <Check size={20} />
                ) : (
                  <Copy size={20} />
                )}
              </button>

            </div>

            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-50 p-4 dark:bg-blue-500/10">

              <p className="text-sm text-blue-700 dark:text-blue-300">
                Anyone with this link can view this document until
                the share link expires.
              </p>

            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl border border-border bg-background py-3 font-semibold text-foreground transition hover:bg-muted"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default ShareDocumentModal;