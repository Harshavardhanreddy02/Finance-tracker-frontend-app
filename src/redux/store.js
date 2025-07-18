import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './feautures/transaction';
import goalReducer from './feautures/Goal';

const loadState = () => {
     try {
          const serializedState = localStorage.getItem('state');
          if (serializedState === null) {
               return undefined;
          }
          return JSON.parse(serializedState);
     } catch (err) {
          console.error("Could not load state", err);
          return undefined;

     }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
};

const preloadedState = loadState();

export const store = configureStore({
     reducer:{
          transaction: transactionReducer,
          goal: goalReducer

     },
     preloadedState,
})

store.subscribe(() => {
  saveState({
    goal: store.getState().goal,
    transaction: store.getState().transaction,
  });
});


export default store