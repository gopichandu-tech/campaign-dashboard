import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function DailyPerformanceChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Daily Performance</h2>

      {/* Prevent chart compression on mobile */}
      <div className="min-w-[450px] w-full">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />

            {/* Chart Lines */}
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="impressions"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="conversions"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
