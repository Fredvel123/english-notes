import { configureStore } from '@reduxjs/toolkit'; 
// slices - states
import profile from '../slices/profile';
import tasks from '../slices/tasks';

export const store = configureStore({
  reducer: {
    profile,
    tasks 
  }
})