import { createSlice } from "@reduxjs/toolkit";

const transactionslice = createSlice({
     name:'transaction',
     initialState:{
          transaction:[]
     },
     reducers:{
          addtransaction:(state, action) => {
               state.transaction.unshift(action.payload);
          },
          deletetransaction:(state, action) => {
               state.transaction = state.transaction.filter(
                    (transaction) => transaction.id !== action.payload
               );
          }
     }
})
export const {addtransaction,deletetransaction} = transactionslice.actions;
export default transactionslice.reducer;