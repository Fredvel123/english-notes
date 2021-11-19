import { createSlice } from "@reduxjs/toolkit";

export const myClassesSlice = createSlice({
  name: "myClasses",
  initialState: {
    value: [{
      title: "",
      videoId: "",
      notes: [{
        word: "",
        sense: "",
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