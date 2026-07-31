import {
  Upload,
  Sparkles,
  Trash2,
  FolderPlus,
} from "lucide-react";

const iconMap = {
  upload: Upload,
  ai: Sparkles,
  folder: FolderPlus,
  delete: Trash2,
};

const colorMap = {
  upload: "bg-blue-100 text-blue-600",
  ai: "bg-purple-100 text-purple-600",
  folder: "bg-green-100 text-green-600",
  delete: "bg-red-100 text-red-600",
};

function RecentActivity({ activities = [] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          No recent activity found.
        </div>
      ) : (
        <div className="space-y-5">
          {activities.map((activity) => {
            const Icon = iconMap[activity.type];

            return (
              <div
                key={activity.id}
                className="flex items-center gap-4"
              >
                <div
                  className={`rounded-full p-3 ${colorMap[activity.type]}`}
                >
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
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
      )}
    </div>
  );
}

export default RecentActivity;