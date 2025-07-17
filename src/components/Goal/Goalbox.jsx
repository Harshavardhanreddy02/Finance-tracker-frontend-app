import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteGoal } from '../../redux/feautures/Goal';
import { useState } from 'react';
import UpdateGoalModal from './UpdateGoalModal';

function Goalbox({ onclick }) {
  const goals = useSelector((state) => state.goal.goals);
  const [updategoal,setupdategoal] = useState(false);
  const dispatch = useDispatch();
  const onUpdateClick = (goal) => {
  setupdategoal(goal);
};

  const handleDelete = (id) => {
    dispatch(deleteGoal(id));
  };

  
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-lg font-bold">🎯 Financial Goals</h3>
          <p className="text-sm text-gray-500">
            Track your progress towards your dreams.
          </p>
        </div>
        <button
          onClick={onclick}
          className="text-blue-600 text-sm flex items-center gap-1 hover:bg-yellow-200 p-2 cursor-pointer"
        >
          ➕ New Goal
        </button>
      </div>

      <div className="space-y-4 mt-4">
        {goals.length > 0 ? (
          goals.map((goal) => {
            const percent = (goal.current / goal.target) * 100;
            const isAchieved = goal.current >= goal.target;

            return (
              <div key={goal.id} className="border-b pb-3">
                {/* Goal Title & Progress */}
                <div className="flex justify-between text-sm font-medium">
                  <span>{goal.category}</span>
                  <span>
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>

                {/* Progress Bar or Achieved */}
                {isAchieved ? (
                  <p className="text-green-600 text-xs font-medium mt-1">
                    ✅ Goal Achieved
                  </p>
                ) : (
                  <div className="w-full h-2 bg-gray-200 rounded mt-1 mb-1">
                    <div
                      className="h-2 bg-blue-500 rounded"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                )}

                <p className="text-xs text-gray-500">Deadline: {goal.deadline}</p>

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 mt-2">
                {goal.current < goal.target && (
  <button
    onClick={() => onUpdateClick(goal)} // <-- open modal with goal data
    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs cursor-pointer"
  >
    Update
  </button>
)}

                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-400 text-center text-sm">No goals added yet.</p>
        )}
      </div>


      {updategoal && (
  <UpdateGoalModal
    goal={updategoal}
    onClose={() => setupdategoal(null)}
  />
)}
    </div>
  );

  
}



export default Goalbox;
