import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, {payload}) => {
      state.products = payload;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
