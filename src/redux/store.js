import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './feautures/transaction';

export const store = configureStore({
     reducer:{
          transaction: transactionReducer
     }
})