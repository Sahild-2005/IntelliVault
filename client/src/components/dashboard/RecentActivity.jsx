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
  upload:
    "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  ai:
    "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  folder:
    "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  delete:
    "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
};

function RecentActivity({ activities = [] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">

      <h2 className="mb-6 text-xl font-bold text-foreground">
        Recent Activity
      </h2>

      {activities.length === 0 ? (
        <div className="py-10 text-center text-muted-foreground">
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

                  <h3 className="font-medium text-foreground">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
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