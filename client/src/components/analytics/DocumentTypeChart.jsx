import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

function DocumentTypeChart({ documents }) {
  const typeMap = {};

  documents.forEach((doc) => {
    const extension =
      doc.name?.split(".").pop()?.toUpperCase() ||
      "UNKNOWN";

    typeMap[extension] =
      (typeMap[extension] || 0) + 1;
  });

  const data = Object.entries(typeMap).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">

      <h2 className="mb-6 text-xl font-semibold text-foreground">
        Document Types
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={
                  COLORS[index % COLORS.length]
                }
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

    </div>
  );
}

export default DocumentTypeChart;