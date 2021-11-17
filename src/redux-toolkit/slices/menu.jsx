import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    value: {
      home: true,
      myDiccionary: false,
      newWords: false,
      myClasses: false,
      searchWords: false
    }
  },
  reducers: {
    setMenu: (state, action) => {
      state.value = action.payload
    }
  }
})
export default menuSlice.reducer;
export const { setMenu } = menuSlice.actions;