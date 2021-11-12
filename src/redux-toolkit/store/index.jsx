import { configureStore } from '@reduxjs/toolkit'; 
// slices - states
import profile from '../slices/profile';
import newWords from '../slices/newWords'

export const store = configureStore({
  reducer: {
    profile,
    newWords 
  }
})