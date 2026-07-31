import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import DocumentCard from "../../components/documents/DocumentCard";
import { useFolders } from "../../context/FolderContext";
import ShareDocumentModal from "../../components/documents/ShareDocumentModal";


import {
  getDocuments,
  deleteDocument,
  renameDocument,
  analyzeDocument,
} from "../../services/documentService";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [analyzingId, setAnalyzingId] = useState(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);
const [selectedDocument, setSelectedDocument] = useState(null);
  const { selectedFolder } = useFolders();

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data.documents);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load documents");
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Delete
  // ===========================
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) return;

    try {
      const data = await deleteDocument(id);

      setDocuments((prev) =>
        prev.filter((doc) => doc._id !== id)
      );

      toast.success(data.message);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Delete failed"
      );
    }
  };

  // ===========================
  // Rename
  // ===========================
  const handleRename = async (id, currentName) => {
    const newName = window.prompt(
      "Enter new document name:",
      currentName
    );

    if (!newName) return;

    if (newName.trim() === currentName) return;

    try {
      const data = await renameDocument(id, newName.trim());

      setDocuments((prev) =>
        prev.map((doc) =>
          doc._id === id
            ? { ...doc, name: data.document.name }
            : doc
        )
      );

      toast.success(data.message);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Rename failed"
      );
    }
  };

  // ===========================
  // Analyze with AI
  // ===========================
  const handleAnalyze = async (id) => {
    try {
      setAnalyzingId(id);

      const data = await analyzeDocument(id);

      setDocuments((prev) =>
        prev.map((doc) =>
          doc._id === id ? data.document : doc
        )
      );

      toast.success("AI Analysis Completed!");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "AI Analysis Failed"
      );
    } finally {
      setAnalyzingId(null);
    }
  };
  // ===========================
// Share
// ===========================
const handleShare = (document) => {
  setSelectedDocument(document);
  setShareModalOpen(true);
};

  // ===========================
  // Search
  // ===========================
const filteredDocuments = documents.filter((doc) => {
  // Folder filter
  const matchesFolder =
    !selectedFolder ||
    doc.folder?._id === selectedFolder;

  // Search filter
  const matchesSearch = doc.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesFolder && matchesSearch;
});

 return (
  <DashboardLayout>
    {/* Heading */}
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-foreground">
        My Documents
      </h1>

      <p className="mt-2 text-muted-foreground">
        Manage all your uploaded documents securely.
      </p>
    </div>

    {/* Search */}
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="🔍 Search documents..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-2xl border border-border bg-card px-5 py-3 text-foreground placeholder:text-muted-foreground shadow-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />
    </div>

    {/* Loading */}
    {loading ? (
      <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

        <h2 className="text-xl font-semibold text-foreground">
          Loading Documents...
        </h2>

        <p className="mt-2 text-muted-foreground">
          Please wait while we fetch your documents.
        </p>
      </div>
    ) : (
      <div className="space-y-5">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <DocumentCard
              key={doc._id}
              document={doc}
              onDelete={handleDelete}
              onRename={handleRename}
              onAnalyze={handleAnalyze}
              onShare={handleShare}
              isAnalyzing={analyzingId === doc._id}
            />
          ))
        ) : (
          <div className="rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">
              {searchTerm
                ? "No Matching Documents"
                : selectedFolder
                ? "No Documents In This Folder"
                : "No Documents Yet"}
            </h2>

            <p className="mt-3 text-muted-foreground">
              {searchTerm
                ? "Try searching with a different keyword."
                : selectedFolder
                ? "Upload a document to this folder."
                : "Upload your first document to get started."}
            </p>
          </div>
        )}
      </div>
    )}

    <ShareDocumentModal
      isOpen={shareModalOpen}
      onClose={() => {
        setShareModalOpen(false);
        setSelectedDocument(null);
      }}
      document={selectedDocument}
    />
  </DashboardLayout>
);
}

export default Documents;