import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './Calculator/CalculatorSlice'
import todosSlice from './Todo/todoSlice'
const store = configureStore({
  reducer: {
    todos:todosSlice,
    calculator: calculatorReducer,
  },
});

export default store;
