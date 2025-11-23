import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

export default function PlatformBreakdownChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">Platform Breakdown</h2>

      <div className="min-w-[500px] w-full"> 
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="platform" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="budgetSpent" fill="#3B82F6" />
            <Bar dataKey="clicks" fill="#10B981" />
            <Bar dataKey="revenue" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
}
