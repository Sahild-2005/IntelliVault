import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FileText,
  Calendar,
  HardDrive,
  Tag,
} from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
import ChatWithDocument from "../../components/documents/ChatWithDocument";
import { getDocumentById } from "../../services/documentService";

function DocumentDetails() {
  const { id } = useParams();

  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocument();
  }, [id]);

  const fetchDocument = async () => {
    try {
      const data = await getDocumentById(id);
      setDocument(data.document);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <p className="text-lg font-medium text-muted-foreground">
              Loading document...
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!document) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <p className="text-lg font-medium text-muted-foreground">
            Document not found.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header */}
        <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-colors duration-300">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-blue-100 p-4 dark:bg-blue-500/20">
              <FileText
                size={34}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>

            <div className="min-w-0">

              <h1 className="break-words text-3xl font-bold text-foreground">
                {document.name}
              </h1>

              <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
                {document.documentType}
              </p>

              <div className="mt-4 flex flex-wrap gap-6 text-sm text-muted-foreground">

                <div className="flex items-center gap-2">
                  <HardDrive size={16} />
                  {(document.fileSize / 1024).toFixed(2)} KB
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(document.createdAt).toLocaleDateString()}
                </div>

                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  PDF
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* PDF + AI */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* PDF Preview */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors duration-300">

            <h2 className="mb-4 text-xl font-semibold text-foreground">
              PDF Preview
            </h2>

            <iframe
              src={document.fileUrl}
              title={document.name}
              className="h-[650px] w-full rounded-xl border border-border bg-background"
            />

          </div>

          {/* AI Analysis */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">

            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
              🤖 AI Analysis
            </h2>

            {/* Summary */}
            <div className="mb-6">

              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Summary
              </p>

              <p className="mt-2 leading-7 text-muted-foreground">
                {document.aiSummary}
              </p>

            </div>

            {/* Suggested Title */}
            <div className="mb-6">

              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Suggested Title
              </p>

              <p className="mt-2 font-semibold text-foreground">
                {document.suggestedTitle}
              </p>

            </div>

            {/* Keywords */}
            <div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Keywords
              </p>

              <div className="flex flex-wrap gap-2">

                {document.aiTags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* AI Chat */}
        <ChatWithDocument documentId={document._id} />

      </div>
    </DashboardLayout>
  );
}

export default DocumentDetails;