function AnalyticsStats({ stats }) {
  const cards = [
    {
      title: "Documents",
      value: stats?.totalDocuments || 0,
      icon: "📄",
      color:
        "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    },
    {
      title: "AI Analyzed",
      value: stats?.analyzedDocuments || 0,
      icon: "🤖",
      color:
        "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
    {
      title: "Storage Used",
      value: `${(
        (stats?.storageUsed || 0) /
        (1024 * 1024)
      ).toFixed(2)} MB`,
      icon: "💾",
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.color}`}
          >
            <span className="text-2xl">{card.icon}</span>
          </div>

          <h3 className="mt-5 text-sm font-medium text-muted-foreground">
            {card.title}
          </h3>

          <p className="mt-2 text-3xl font-bold text-foreground">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AnalyticsStats;