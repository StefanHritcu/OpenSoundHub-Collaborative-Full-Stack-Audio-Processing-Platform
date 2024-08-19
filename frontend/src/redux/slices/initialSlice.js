import { createSlice } from "@reduxjs/toolkit";

const initialSlice = createSlice({
  name: "statoIniziale",
  initialState: {
    headerMenu: false,
  },
  reducers: {
    setHeaderMenu: (state) => {
      state.headerMenu = !state.headerMenu;
    },
  },
});

export const { setHeaderMenu } = initialSlice.actions;
export const initialSliceReducer = initialSlice.reducer;
