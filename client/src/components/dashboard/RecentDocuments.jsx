import { FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function RecentDocuments({ documents = [] }) {
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Documents
          </h2>

          <p className="text-gray-500">
            Your latest uploaded documents
          </p>
        </div>

        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {documents.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          No documents uploaded yet.
        </div>
      ) : (
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc._id}
              onClick={() => navigate(`/documents/${doc._id}`)}
              className="flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all duration-200 hover:border-blue-200 hover:bg-slate-50 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-3">
                  <FileText
                    className="text-blue-600"
                    size={22}
                  />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {doc.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {(doc.fileType || "")
                      .replace("application/", "")
                      .toUpperCase()}{" "}
                    •{" "}
                    {(doc.fileSize / 1024).toFixed(0)} KB
                  </p>
                </div>
              </div>

              <span className="text-sm text-gray-500">
                {formatDate(doc.createdAt)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentDocuments;