import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
};

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    getColors: (state, { payload }) => {
      state.colors = payload;
    },
  },
});

export const {getColors} = colorSlice.actions
export default colorSlice.reducer;
