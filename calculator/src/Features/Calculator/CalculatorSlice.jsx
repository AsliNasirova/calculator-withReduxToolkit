import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    result: 0,
  },
  reducers: {
    toplama: (state, action) => {
      state.result += action.payload;
    },
    cixma: (state, action) => {
      state.result -= action.payload;
    },
    vurma: (state, action) => {
      state.result *= action.payload;
    },
    bolme: (state, action) => {
      state.result /= action.payload;
    },
    reset: (state) => {
      state.result = 0;
    },
  },
});

export const { toplama, cixma, vurma, bolme, reset } = calculatorSlice.actions;

export default calculatorSlice.reducer;