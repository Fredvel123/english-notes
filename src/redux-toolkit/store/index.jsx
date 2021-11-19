import { configureStore } from '@reduxjs/toolkit'; 
// slices - states
import profile from '../slices/profile';
import diccionary from '../slices/diccionaty';
import myVideos from '../slices/myVideos';
import menu from '../slices/menu';
import myClasses  from '../slices/myClasses'

export const store = configureStore({
  reducer: {
    profile,
    myVideos,
    diccionary,
    menu,
    myClasses
  }
})