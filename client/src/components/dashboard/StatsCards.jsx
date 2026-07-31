import {
  FileText,
  HardDrive,
  Bot,
  Folder,
} from "lucide-react";

function StatsCards({ stats }) {
  if (!stats) return null;

  const formatStorage = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} KB`;

    if (bytes < 1024 * 1024 * 1024)
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  const cards = [
    {
      title: "Documents",
      value: stats.totalDocuments,
      subtitle: "Uploaded Documents",
      icon: FileText,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    },
    {
      title: "AI Analyzed",
      value: stats.analyzedDocuments,
      subtitle: "AI Processed",
      icon: Bot,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    },
    {
      title: "Storage Used",
      value: formatStorage(stats.storageUsed),
      subtitle: "Cloud Storage",
      icon: HardDrive,
      color: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
    {
      title: "Folders",
      value: stats.folders,
      subtitle: "Organized Folders",
      icon: Folder,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className={`rounded-xl p-3 ${item.color}`}>
                <Icon size={24} />
              </div>
            </div>

            <h3 className="text-sm text-muted-foreground">
              {item.title}
            </h3>

            <p className="mt-2 text-3xl font-bold text-foreground">
              {item.value}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;