import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#ef4444"];

function AIAnalytics({ stats }) {
  const analyzed = stats?.analyzedDocuments || 0;
  const total = stats?.totalDocuments || 0;
  const pending = total - analyzed;

  const data = [
    {
      name: "Analyzed",
      value: analyzed,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  const completion =
    total === 0 ? 0 : Math.round((analyzed / total) * 100);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">

      <h2 className="mb-6 text-xl font-semibold text-foreground">
        AI Analysis
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>

          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "12px",
              color: "#ffffff",
            }}
            labelStyle={{
              color: "#ffffff",
            }}
            itemStyle={{
              color: "#ffffff",
            }}
          />

        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 text-center">

        <p className="text-3xl font-bold text-green-600">
          {completion}%
        </p>

        <p className="mt-1 text-muted-foreground">
          Documents Analyzed
        </p>

        <div className="mt-5 flex justify-between text-sm text-muted-foreground">

          <span>🤖 {analyzed} Analyzed</span>

          <span>⏳ {pending} Pending</span>

        </div>

      </div>

    </div>
  );
}

export default AIAnalytics;