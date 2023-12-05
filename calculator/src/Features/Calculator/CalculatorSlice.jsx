import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    result: 0,
   
  },
  reducers: {
    toplama: (state, action) => {
      state.result = action.payload.input + action.payload.input2;
    },
    cixma: (state, action) => {
      state.result = action.payload.input - action.payload.input2;
    },
    vurma: (state, action) => {
      state.result = action.payload.input * action.payload.input2;
    },
    bolme: (state, action) => {
      state.result = action.payload.input / action.payload.input2;
    },
    reset: (state) => {
      state.result =0;
    },
  },
});

export const { toplama, cixma, vurma, bolme, reset } = calculatorSlice.actions;

export default calculatorSlice.reducer;