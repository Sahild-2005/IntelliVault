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
    <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-colors duration-300">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Recent Documents
          </h2>

          <p className="text-muted-foreground">
            Your latest uploaded documents
          </p>
        </div>

        <button className="flex items-center gap-2 text-blue-600 transition hover:text-blue-500">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {documents.length === 0 ? (
        <div className="py-10 text-center text-muted-foreground">
          No documents uploaded yet.
        </div>
      ) : (
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc._id}
              onClick={() => navigate(`/documents/${doc._id}`)}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-background p-4 transition-all duration-200 hover:border-blue-500 hover:bg-muted hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-500/20">
                  <FileText
                    className="text-blue-600 dark:text-blue-400"
                    size={22}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">
                    {doc.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {(doc.fileType || "")
                      .replace("application/", "")
                      .toUpperCase()}{" "}
                    • {(doc.fileSize / 1024).toFixed(0)} KB
                  </p>
                </div>
              </div>

              <span className="text-sm text-muted-foreground">
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