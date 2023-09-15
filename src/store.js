import { configureStore } from '@reduxjs/toolkit';
import { postsSlice } from './slices/postsSlice';
import { authSlice } from './slices/authSlice';

export const store = configureStore({
  reducer: {
      postsSlice: postsSlice.reducer,
      authSlice: authSlice.reducer
  },
})