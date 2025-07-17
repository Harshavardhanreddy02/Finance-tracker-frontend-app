import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Colors for categories
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0', '#FF69B4'];

export default function ExpensePieChart() {
  const transactions = useSelector((state) => state.transaction.transaction);

  // Filter only expenses
  const expenses = transactions.filter((t) => t.type === 'expense');

  // Group by category
  const categoryTotals = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  // Convert to array for Recharts
  const data = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-sm">No expense data available</p>
      )}
    </div>
  );
}
