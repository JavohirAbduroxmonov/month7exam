import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brands: []
}

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        getBrands: (state, {payload}) => {
            state.brands = payload
        }
    }
})

export const {getBrands} = brandsSlice.actions
export default brandsSlice.reducer