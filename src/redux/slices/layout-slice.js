import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRightMenu: false,
  showLeftMenu: false,
};

const layoutSlice = createSlice({
  initialState,
  name: "layoutSlice",
  reducers: {
    setShowRightMenu(state, action) {
      state.showRightMenu = action.payload;
    },
    setShowLeftMenu(state, action) {
      state.showLeftMenu = action.payload;
    },
  },
});
export const { setShowRightMenu, setShowLeftMenu } = layoutSlice.actions;
export default layoutSlice.reducer;
