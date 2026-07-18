import {
  Upload,
  FolderPlus,
  Bot,
} from "lucide-react";

function QuickActions() {
  const actions = [
    {
      title: "Upload Document",
      icon: Upload,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "New Folder",
      icon: FolderPlus,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "AI Chat",
      icon: Bot,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex w-full items-center gap-4 rounded-xl border p-4 transition hover:bg-slate-50"
            >
              <div className={`rounded-lg p-3 ${action.color}`}>
                <Icon size={22} />
              </div>

              <span className="font-medium">
                {action.title}
              </span>
            </button>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;