// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import testSlice from './test.slice'; // Replace with your actual slice

const store = configureStore({
  reducer: {
    yourSlice: testSlice, // Add your slice reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
