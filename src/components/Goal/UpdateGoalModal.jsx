import React from 'react'
import { useDispatch } from 'react-redux';
import { updateGoal } from '../../redux/feautures/Goal';
import { useState } from 'react';


function UpdateGoalModal({goal,onClose}) {
     const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
     const handleUpdate = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;

    dispatch(updateGoal({ id: goal.id, amount: Number(amount) }));
    onClose();
  };
  return (
    <>
     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Update Goal</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <p className="text-gray-600 mb-2">{goal.category} (Current: ${goal.current} / Target: ${goal.target})</p>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
            Update
          </button>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default UpdateGoalModal