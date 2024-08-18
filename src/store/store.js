import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import BrandsReducer from "../features/BrandsSlice";
import ColorsReducer from "../features/ColorsSlice";

export const store = configureStore({
    reducer:{
        productsReducer,
        BrandsReducer,
        ColorsReducer
    }
})