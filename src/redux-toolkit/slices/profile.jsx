import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    value: {
      isLogged: false
    }
  },
  reducers: {
    setProfile: (state, action) => {
      state.value = action.payload
    }
  }
})
export default profileSlice.reducer;
export const { setProfile } = profileSlice.actions;