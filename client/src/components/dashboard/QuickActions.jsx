import {
  Upload,
  FileText,
  Search,
  Bot,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Upload Document",
      description: "Add a new PDF or DOCX",
      icon: Upload,
      color: "bg-blue-100 text-blue-600",
      action: () => navigate("/documents"),
    },
    {
      title: "My Documents",
      description: "Browse all uploaded files",
      icon: FileText,
      color: "bg-green-100 text-green-600",
      action: () => navigate("/documents"),
    },
    {
      title: "Search Documents",
      description: "Find documents instantly",
      icon: Search,
      color: "bg-orange-100 text-orange-600",
      action: () => navigate("/documents"),
    },
    {
      title: "AI Assistant",
      description: "Chat with your documents",
      icon: Bot,
      color: "bg-purple-100 text-purple-600",
      action: () => navigate("/documents"),
    },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-1 text-xl font-bold">
        Quick Actions
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        Jump to common tasks
      </p>

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={action.action}
              className="flex w-full items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:border-blue-200 hover:bg-slate-50 hover:shadow-md"
            >
              <div className={`rounded-lg p-3 ${action.color}`}>
                <Icon size={22} />
              </div>

              <div className="text-left">
                <h3 className="font-semibold">
                  {action.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;