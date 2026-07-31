import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function UploadChart({ documents }) {
  const uploadMap = {};

  documents.forEach((doc) => {
    const day = new Date(doc.createdAt).toLocaleDateString("en-US", {
      weekday: "short",
    });

    uploadMap[day] = (uploadMap[day] || 0) + 1;
  });

  const data = Object.keys(uploadMap).map((day) => ({
    day,
    uploads: uploadMap[day],
  }));

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors duration-300">

      <h2 className="mb-6 text-xl font-semibold text-foreground">
        Upload Activity
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#475569"
            opacity={0.3}
          />

          <XAxis
            dataKey="day"
            tick={{
              fill: "#94a3b8",
              fontSize: 13,
            }}
            axisLine={{
              stroke: "#475569",
            }}
            tickLine={{
              stroke: "#475569",
            }}
          />

          <YAxis
            allowDecimals={false}
            tick={{
              fill: "#94a3b8",
              fontSize: 13,
            }}
            axisLine={{
              stroke: "#475569",
            }}
            tickLine={{
              stroke: "#475569",
            }}
          />

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
              color: "#60a5fa",
            }}
          />

          <Line
            type="monotone"
            dataKey="uploads"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "#3b82f6",
            }}
            activeDot={{
              r: 7,
            }}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default UploadChart;