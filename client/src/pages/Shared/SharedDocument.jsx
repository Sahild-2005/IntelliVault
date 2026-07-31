import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FileText,
  Download,
  AlertCircle,
} from "lucide-react";

import { getSharedDocument } from "../../services/shareService";

function SharedDocument() {
  const { token } = useParams();

  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDocument();
  }, []);

  const fetchDocument = async () => {
    try {
      const data = await getSharedDocument(token);
      setDocument(data.document);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load shared document."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

          <h2 className="text-xl font-semibold text-foreground">
            Loading shared document...
          </h2>

          <p className="mt-2 text-muted-foreground">
            Please wait...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-sm">

          <AlertCircle
            className="mx-auto mb-5 text-red-500"
            size={56}
          />

          <h2 className="text-2xl font-bold text-foreground">
            Link Invalid
          </h2>

          <p className="mt-3 text-muted-foreground">
            {error}
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-10">

      <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-sm">

        {/* Header */}
        <div className="mb-8 flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
            <FileText size={34} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {document.name}
            </h1>

            <p className="text-muted-foreground">
              Shared Document
            </p>
          </div>

        </div>

        {/* Information */}
        <div className="space-y-4 rounded-xl border border-border bg-background p-5">

          <div className="flex justify-between">
            <span className="font-medium text-muted-foreground">
              Type
            </span>

            <span className="text-foreground">
              {document.fileType}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-muted-foreground">
              Size
            </span>

            <span className="text-foreground">
              {(document.fileSize / 1024).toFixed(2)} KB
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-muted-foreground">
              Uploaded
            </span>

            <span className="text-foreground">
              {new Date(document.createdAt).toLocaleDateString()}
            </span>
          </div>

        </div>

        {/* AI Summary */}
        {document.aiSummary && (
          <div className="mt-8">

            <h2 className="mb-4 text-xl font-semibold text-foreground">
              🤖 AI Summary
            </h2>

            <div className="rounded-xl border border-violet-500/20 bg-violet-50 p-5 text-muted-foreground dark:bg-violet-500/10">
              {document.aiSummary}
            </div>

          </div>
        )}

        {/* Download Button */}
        <a
          href={document.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          <Download size={20} />
          Open Document
        </a>

      </div>

    </div>
  );
}

export default SharedDocument;