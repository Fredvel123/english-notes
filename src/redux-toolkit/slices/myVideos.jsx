import { createSlice } from "@reduxjs/toolkit";

export const videosSlice = createSlice({
  name: "myVideos",
  initialState: {
    value: []
  },
  reducers: {
    setMyVideos: (state, action) => {
      state.value = action.payload
    }
  }
})
export default videosSlice.reducer;
export const { setMyVideos } = videosSlice.actions;