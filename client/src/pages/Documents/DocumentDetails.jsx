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
        <div className="p-10 text-center text-xl">
          Loading document...
        </div>
      </DashboardLayout>
    );
  }

  if (!document) {
    return (
      <DashboardLayout>
        <div className="p-10 text-center text-xl">
          Document not found.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-blue-100 p-4">
              <FileText
                size={34}
                className="text-blue-600"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {document.name}
              </h1>

              <p className="mt-2 text-blue-600 font-medium">
                {document.documentType}
              </p>

              <div className="mt-4 flex flex-wrap gap-6 text-gray-500 text-sm">

                <div className="flex items-center gap-2">
                  <HardDrive size={16} />
                  {(document.fileSize / 1024).toFixed(2)} KB
                </div>

                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(
                    document.createdAt
                  ).toLocaleDateString()}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* PDF */}
          <div className="rounded-2xl border bg-white p-4">

            <h2 className="mb-4 text-xl font-semibold">
              PDF Preview
            </h2>

            <iframe
              src={document.fileUrl}
              title={document.name}
              className="h-[650px] w-full rounded-xl border"
            />

          </div>

          {/* AI */}
          <div className="rounded-2xl border bg-white p-6">

            <h2 className="mb-6 text-2xl font-bold">
              🤖 AI Analysis
            </h2>

            <div className="mb-6">
              <p className="text-xs uppercase text-gray-500 font-semibold">
                Summary
              </p>

              <p className="mt-2 leading-7 text-gray-700">
                {document.aiSummary}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase text-gray-500 font-semibold">
                Suggested Title
              </p>

              <p className="mt-2 font-semibold">
                {document.suggestedTitle}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500 font-semibold mb-3">
                Keywords
              </p>

              <div className="flex flex-wrap gap-2">

                {document.aiTags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Chat */}
        <ChatWithDocument
          documentId={document._id}
        />

      </div>
    </DashboardLayout>
  );
}

export default DocumentDetails;