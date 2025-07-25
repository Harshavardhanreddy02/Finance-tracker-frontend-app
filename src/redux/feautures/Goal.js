import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: 'goal',
  initialState: {
    goals: [] 
  },
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },
    deleteGoal: (state, action) => {
      state.goals = state.goals.filter(goal => goal.id !== action.payload);
    },
   updateGoal: (state, action) => {
  const { id, amount } = action.payload;
  const goal = state.goals.find((g) => g.id === id);
  if (goal) {
    goal.current += amount;
    if (goal.current > goal.target) {
      goal.current = goal.target; 
    }
  }
} ,
 cleargoals: (state) =>
 {
        state.goals = []
 }
  }
});

export const { addGoal, deleteGoal, updateGoal,cleargoals } = goalSlice.actions;
export default goalSlice.reducer;
