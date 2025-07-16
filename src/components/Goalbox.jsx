import React from 'react'

function Goalbox() {
      const goals = [
    {
      title: 'Vacation to Hawaii',
      current: 1500,
      target: 4000,
      deadline: 'June 2025',
    },
    {
      title: 'New Laptop',
      current: 1800,
      target: 2000,
      deadline: 'September 2024',
    },
  ];
  return (
     <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-lg font-bold">🎯 Financial Goals</h3>
          <p className="text-sm text-gray-500">Track your progress towards your dreams.</p>
        </div>
        <button className="text-blue-600 text-sm  flex items-center gap-1  hover:bg-yellow-200 p-2 cursor-pointer">
          ➕ New Goal
        </button>
      </div>

      <div className="space-y-4 mt-4">
        {goals.map((goal, index) => {
          const percent = (goal.current / goal.target) * 100;
          return (
            <div key={index}>
              <div className="flex justify-between text-sm font-medium">
                <span>{goal.title}</span>
                <span>
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded mt-1 mb-1">
                <div
                  className="h-2 bg-blue-500 rounded"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">Deadline: {goal.deadline}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Goalbox