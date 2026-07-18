import {
  Upload,
  Sparkles,
  Trash2,
  FolderPlus,
} from "lucide-react";

function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "Uploaded Resume.pdf",
      time: "10 minutes ago",
      icon: Upload,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "AI summarized Semester7Notes.pdf",
      time: "45 minutes ago",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      title: "Created Personal Documents folder",
      time: "Yesterday",
      icon: FolderPlus,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      title: "Deleted Old Resume.pdf",
      time: "2 days ago",
      icon: Trash2,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center gap-4"
            >
              <div className={`rounded-full p-3 ${activity.color}`}>
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <h3 className="font-medium">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivity;