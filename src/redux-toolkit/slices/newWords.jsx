import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "newWords",
  initialState: {
    value: []
  },
  reducers: {
    setNewWords: (state, action) => {
      state.value = action.payload
    }
  }
})
export default tasksSlice.reducer;
export const {setNewWords} = tasksSlice.actions;