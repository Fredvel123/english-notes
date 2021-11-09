import { configureStore } from '@reduxjs/toolkit'; 
// slices - states
import profile from '../slices/profile';

export const store = configureStore({
  reducer: {
    profile 
  }
})