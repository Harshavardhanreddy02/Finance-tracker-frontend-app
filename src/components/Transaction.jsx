import React from 'react'

function Transaction() {

  const transactions = [
    { id: 1, desc: 'New clothes', cat: 'Shopping', date: 'July 12th, 2024', amount: -200 },
    { id: 2, desc: 'Electricity Bill', cat: 'Utilities', date: 'July 10th, 2024', amount: -150 },
    { id: 3, desc: 'Movie tickets', cat: 'Entertainment', date: 'July 8th, 2024', amount: -45 },
    { id: 4, desc: 'Monthly Salary', cat: 'Salary', date: 'July 1st, 2024', amount: 5000 },
  ];
  return (
    <>
     <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Transactions</h3>
        <button className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700 text-sm cursor-pointer">
          ➕ Add Transaction
        </button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2">Description</th>
            <th>Category</th>
            <th>Date</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="py-2">{t.desc}</td>
              <td><span className="bg-gray-100 px-2 py-1 rounded text-xs">{t.cat}</span></td>
              <td>{t.date}</td>
              <td className={`text-right ${t.cat === "Salary" ? 'text-green-600' : 'text-red-500'}`}>
                {t.cat === "Salary" ? `+$${t.amount}` : `-$${Math.abs(t.amount)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  )
}

export default Transaction