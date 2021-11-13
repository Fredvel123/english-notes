import { createSlice } from "@reduxjs/toolkit";

export const diccionarySlice = createSlice({
  name: "diccionary",
  initialState: {
    value: []
  },
  reducers: {
    setDiccionary: (state, action) => {
      state.value = action.payload
    }
  }
})
export default diccionarySlice.reducer;
export const { setDiccionary } = diccionarySlice.actions;