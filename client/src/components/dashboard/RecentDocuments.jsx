import { FileText, ArrowRight } from "lucide-react";

function RecentDocuments() {
  const documents = [
    {
      id: 1,
      name: "Resume.pdf",
      type: "PDF",
      updated: "Today",
    },
    {
      id: 2,
      name: "Aadhaar.pdf",
      type: "PDF",
      updated: "Yesterday",
    },
    {
      id: 3,
      name: "Semester 7 Notes.docx",
      type: "DOCX",
      updated: "2 days ago",
    },
    {
      id: 4,
      name: "Passport.pdf",
      type: "PDF",
      updated: "4 days ago",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Documents
          </h2>

          <p className="text-gray-500">
            Your recently accessed files
          </p>
        </div>

        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3">
                <FileText className="text-blue-600" size={22} />
              </div>

              <div>
                <h3 className="font-semibold">
                  {doc.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {doc.type}
                </p>
              </div>
            </div>

            <span className="text-sm text-gray-500">
              {doc.updated}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentDocuments;