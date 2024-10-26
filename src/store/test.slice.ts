/* eslint-disable @typescript-eslint/no-explicit-any */
// src/yourSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface YourState {
  data: any[]; // Change 'any' to a more specific type as needed
}

const initialState: YourState = {
  data: [],
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = testSlice.actions;
export default testSlice.reducer;
