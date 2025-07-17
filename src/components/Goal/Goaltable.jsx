import React from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../../redux/feautures/Goal';
import { useState } from 'react';


function Goaltable({onClose}) {
  const dispatch = useDispatch();
  const [form,setform ] = useState({
   
    category: '',
    target: '',
    current: '',
    deadline: '',
  })


  const handleSubmit = (e) =>
  {
    e.preventDefault();
    const newGoal = {
      ...form,
      id: Date.now(),
      current: Number(form.current),
  target: Number(form.target),
       // Initial current amount is 0
    };
    dispatch(addGoal(newGoal));
    onClose();
  }

  const handleChange = (e) =>
  {
        setform({...form, [e.target.name]: e.target.value})
  }
  return (
   <>
   
         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm  flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg transform transition-all duration-500 ease-out scale-95 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
      <div className="flex justify-between items-start mb-4">
  {/* Left Side: Title & Paragraph */}
  <div>
    <h2 className="text-xl font-semibold mb-1">Set New Goal</h2>
    <p className="text-sm text-gray-600">
      Define your financial goal and start tracking your progress.
    </p>
  </div>

  {/* Right Side: Close Button */}
  <button
    onClick={onClose}
    className="text-gray-400 hover:text-gray-600 text-xl font-bold cursor-pointer"
  >
    ✕
  </button>
</div>


        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            name="category"
            placeholder="Category (e.g., Vacation)"
            className="w-full p-2 border rounded"
            value={form.category}
            onChange={handleChange}
            required
          />
          <input
            name="target"
            type="number"
            placeholder="Target Amount"
            className="w-full p-2 border rounded"
            value={form.target}
            onChange={handleChange}
            required
          />
          <input
            name="current"
            type="number"
            placeholder="Current Savings"
            className="w-full p-2 border rounded"
            value={form.current}
            onChange={handleChange}
            required
          />
          <input
            name="deadline"
            type="date"
            className="w-full p-2 border rounded cursor-pointer"
            value={form.deadline}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
            Set Goal
          </button>
        </form>
      </div>
    </div>
   </>
  )
}

export default Goaltable