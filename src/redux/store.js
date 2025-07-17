import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './feautures/transaction';
import goalReducer from './feautures/Goal';

export const store = configureStore({
     reducer:{
          transaction: transactionReducer,
          goal: goalReducer

     }
})