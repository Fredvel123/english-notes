import { createSlice } from "@reduxjs/toolkit";

export const myClassesSlice = createSlice({
  name: "myClasses",
  initialState: {
    value: [{
      videoId: "",
      notes: [{
        word: "",
        sentences: [],
        descripton: ""
      }]
    }]
  },
  reducers: {
    setClasses: (state, action) => {
      state.value = action.payload;
    }
  }
})
export default myClassesSlice.reducer;
export const { setClasses } = myClassesSlice.actions;