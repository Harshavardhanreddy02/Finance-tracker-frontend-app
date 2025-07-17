import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtransaction } from '../../redux/feautures/transaction';

function Transactionform({ onClose }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    type: 'expense',
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.amount || parseFloat(form.amount) <= 0) newErrors.amount = 'Amount must be greater than 0';
    if (!form.category) newErrors.category = 'Please select a category';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newTransaction = {
      ...form,
      id: Date.now(),
      amount: parseFloat(form.amount),
    };

    dispatch(addtransaction(newTransaction));
    onClose();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error for that field
  };

  // Categories based on type
  const expenseCategories = [
    'Food & Groceries',
    'Shopping',
    'Entertainment',
    'Transport',
    'Health',
    'Utilities',
    'Others',
  ];

  const incomeCategories = ['Salary', 'Others'];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Add Transaction</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type Selector */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setForm({ ...form, type: 'expense', category: '' })}
              className={`cursor-pointer flex-1 p-2 border rounded ${
                form.type === 'expense' ? 'bg-red-100' : ''
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, type: 'income', category: '' })}
              className={`cursor-pointer flex-1 p-2 border rounded ${
                form.type === 'income' ? 'bg-green-100' : ''
              }`}
            >
              Income
            </button>
          </div>

          {/* Description */}
          <div>
            <input
              name="description"
              placeholder="Description"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={form.description}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Amount */}
          <div>
            <input
              name="amount"
              type="number"
              placeholder="Amount"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              value={form.amount}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount}</p>
            )}
          </div>

          {/* Dynamic Category Dropdown */}
          <div>
            <select
              name="category"
              className="w-full p-2 border rounded cursor-pointer"
              onChange={handleChange}
              value={form.category}
            >
              <option value="">Select category</option>
              {form.type === 'expense'
                ? expenseCategories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))
                : incomeCategories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>

          {/* Date */}
          <input
            type="date"
            name="date"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            value={form.date}
          />

          {/* Submit Button */}
          <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 cursor-pointer">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transactionform;
