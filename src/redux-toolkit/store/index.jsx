import { configureStore } from '@reduxjs/toolkit'; 
// slices - states
import profile from '../slices/profile';
import newWords from '../slices/newWords'
import diccionary from '../slices/diccionaty';

export const store = configureStore({
  reducer: {
    profile,
    newWords,
    diccionary 
  }
})