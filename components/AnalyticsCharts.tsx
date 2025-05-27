'use client';

import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,  
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';



const statusColors: Record<string, string> = {
  Pending: '#facc15',
  Preparing: '#3b82f6',
  'Out for Delivery': '#f97316',
  Delivered: '#22c55e',
  Cancelled: '#ef4444',
};

type Order = {
  status: string;
  date: string;
  // Add other fields if needed
};

type Props = {
  data: Order[];
};

export default function AnalyticsCharts({ data }: Props) {
  // Pie chart data: Order counts by status
  const statusCounts = data.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  // Line chart data: Orders per date
  const ordersByDate = data.reduce((acc, order) => {
    const date = order.date.split(' ')[0]; // Extract YYYY-MM-DD
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const lineChartData = Object.entries(ordersByDate).map(([date, count]) => ({
    date,
    orders: count,
  }));

  return (
    <div className="grid grid-cols-1 items- md:grid-cols-2 gap-8 mb-5 w-11/12 text-white mt-6">
  {/* Pie Chart */}
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
    <h2 className="text-lg font-semibold mb-4">Order Status Distribution</h2>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="45%"
          outerRadius={80}
          dataKey="value"
          label
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={statusColors[entry.name] || '#8884d8'}
            />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  </div>

  {/* Line Chart */}
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
    <h2 className="text-lg font-semibold mb-4">Orders Per Day</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineChartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="date" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#38bdf8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>
  );
}
