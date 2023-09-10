import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './slices/postsSlice';

export const store = configureStore({
  reducer: {
      postsSlice: postsSlice.reducer
  },
})