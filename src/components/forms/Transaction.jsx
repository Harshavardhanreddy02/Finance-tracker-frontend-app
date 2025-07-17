import React from "react";
import { useSelector } from "react-redux";

function Transaction({ onAddClick }) {
  const transactions = useSelector((state) => state.transaction.transaction);

  return (
    <>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Transactions</h3>
          <button
            onClick={onAddClick}
            className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700 text-sm cursor-pointer"
          >
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
            {transactions.length > 0 ? (
              transactions.map((t) => (
                <tr key={t.id} className="border-b">
                  <td className="py-2">{t.description}</td>
                  <td>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {t.category}
                    </span>
                  </td>
                  <td>{t.date}</td>
                  <td
                    className={`text-right ${
                      t.type === "income" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {t.type === "income"
                      ? `+$${t.amount}`
                      : `-$${Math.abs(t.amount)}`}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No transactions yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transaction;
