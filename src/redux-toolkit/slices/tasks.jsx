import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    value: []
  },
  reducers: {
    setTasks: (state, action) => {
      state.value = action.payload
    }
  }
})
export default tasksSlice.reducer;
export const {setTasks} = tasksSlice.actions;