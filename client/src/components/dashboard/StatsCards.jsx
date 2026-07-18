import {
  FileText,
  HardDrive,
  Bot,
  Upload,
} from "lucide-react";

function StatsCards() {
  const stats = [
    {
      title: "Documents",
      value: "24",
      subtitle: "+12% this month",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Storage",
      value: "2.4 GB",
      subtitle: "65% Used",
      icon: HardDrive,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "AI Chats",
      value: "18",
      subtitle: "This Month",
      icon: Bot,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Uploads",
      value: "42",
      subtitle: "This Week",
      icon: Upload,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className={`rounded-xl p-3 ${item.color}`}>
                <Icon size={24} />
              </div>

              <span className="text-sm text-green-600 font-medium">
                +8%
              </span>
            </div>

            <h3 className="text-gray-500">
              {item.title}
            </h3>

            <p className="mt-2 text-3xl font-bold">
              {item.value}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;