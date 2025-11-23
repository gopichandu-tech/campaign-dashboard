// DeviceBreakdownChart.tsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function DeviceBreakdownChart({ data }: { data: any }) {
  const pieData = [
    { name: "Desktop", value: data.desktop },
    { name: "Mobile", value: data.mobile },
    { name: "Tablet", value: data.tablet },
  ];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Device Breakdown</h2>

      {/* Prevent chart from shrinking too much on small screens */}
      <div className="min-w-[400px] w-full">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={window.innerWidth < 640 ? 80 : 100}  // Dynamic radius
              label
            >
              {pieData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
