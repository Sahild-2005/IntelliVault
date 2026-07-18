import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import DocumentCard from "../../components/documents/DocumentCard";

import {
  getDocuments,
  deleteDocument,
  renameDocument,
} from "../../services/documentService";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) return;

    try {
      const data = await deleteDocument(id);

      // Remove deleted document instantly
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

  // Live Search
  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          My Documents
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all your uploaded documents securely.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Loading */}
      {loading ? (
        <div className="rounded-2xl border bg-white p-12 text-center">
          <h2 className="text-xl font-semibold">
            Loading Documents...
          </h2>
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
              />
            ))
          ) : (
            <div className="rounded-2xl border bg-white p-12 text-center">
              <h2 className="text-2xl font-semibold">
                {searchTerm
                  ? "No Matching Documents"
                  : "No Documents Yet"}
              </h2>

              <p className="mt-2 text-gray-500">
                {searchTerm
                  ? "Try searching with a different keyword."
                  : "Upload your first document to get started."}
              </p>
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
}

export default Documents;