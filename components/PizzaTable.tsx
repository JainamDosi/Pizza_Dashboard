'use client';
import { useState } from 'react';

import AnalyticsCharts from '@/components/AnalyticsCharts';

const statusColors: Record<string, string> = {
  Pending: '#facc15',
  Preparing: '#3b82f6',
  'Out for Delivery': '#f97316',
  Delivered: '#22c55e',
  Cancelled: '#ef4444',
};

type PizzaOrder = {
  id: string;
  customer: string;
  type: string;
  quantity: number;
  date: string;
  status: string;
};

interface PizzaTableProps {
  data: PizzaOrder[];
}

export default function PizzaTable({ data }: PizzaTableProps) {
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState<'id' | 'date' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const pageSize = 10;

  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    const aVal = sortBy === 'id' ? a.id : a.date;
    const bVal = sortBy === 'id' ? b.id : b.date;
    return sortOrder === 'asc'
      ? aVal.localeCompare(bVal)
      : bVal.localeCompare(aVal);
  });

  const filteredData =
    statusFilter === 'All'
      ? sortedData
      : sortedData.filter((order) => order.status === statusFilter);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const start = page * pageSize;
  const end = start + pageSize;
  const currentPageData = filteredData.slice(start, end);

  return (
    <div className='flex flex-col items-center justify-center mb-5'>
      <AnalyticsCharts data={data} />
  

    <div className="w-11/12 mt-5">/
      {/* Filter Dropdown */}
      <div className="flex justify-end mb-4 text-white">
        <label className="mr-2 self-center">Filter by Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(0);
          }}
          className="bg-gray-800 border border-gray-600 rounded-md px-2 py-1"
        >
          <option>All</option>
          {Object.keys(statusColors).map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-500 bg-transparent">
        <table className="min-w-full bg-transparent text-white text-sm md:text-base">
          <thead>
            <tr>

<th className="p-3 text-left font-semibold uppercase flex items-center gap-2">
  Order ID
  <button
    type="button"
    className="ml-1 px-1 py-0.5 rounded bg-gray-700 hover:bg-gray-600 text-amber-300 text-xs"
    onClick={() => {
      setSortBy('id');
      setSortOrder((prev) =>
        sortBy === 'id' && prev === 'asc' ? 'desc' : 'asc'
      );
    }}
    aria-label="Sort by Order ID"
  >
    {sortBy === 'id' ? (sortOrder === 'asc' ? '▲' : '▼') : '⇅'}
  </button>
</th>
<th className="p-3 text-left font-semibold uppercase">Customer</th>
<th className="p-3 text-left font-semibold uppercase">Pizza</th>
<th className="p-3 text-left font-semibold uppercase">Qty</th>
<th className="p-3 text-left font-semibold uppercase flex items-center gap-2">
  Date
  <button
    type="button"
    className="ml-1 px-1 py-0.5 rounded bg-gray-700 hover:bg-gray-600 text-amber-300 text-xs"
    onClick={() => {
      setSortBy('date');
      setSortOrder((prev) =>
        sortBy === 'date' && prev === 'asc' ? 'desc' : 'asc'
      );
    }}
    aria-label="Sort by Date"
  >
    {sortBy === 'date' ? (sortOrder === 'asc' ? '▲' : '▼') : '⇅'}
  </button>
</th>
              <th className="p-3 text-left font-semibold uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((order, idx) => (
              <tr
                key={order.id}
                className={`border-b border-gray-600 ${
                  idx % 2 === 0
                    ? 'bg-transparent'
                    : 'bg-gray-800 bg-opacity-30'
                } `}
              >
                <td className="p-3 font-mono">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.type}</td>
                <td className="p-3">{order.quantity}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: statusColors[order.status] ?? '#374151',
                      color: '#111', // or '#fff' for better contrast if needed
                    }}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 mt-4 text-white">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className={`px-4 py-2 rounded-md border border-gray-500 ${
            page === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
          }`}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className={`px-4 py-2 rounded-md border border-gray-500 ${
            page === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
}
