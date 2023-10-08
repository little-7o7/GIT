import { createSlice } from '@reduxjs/toolkit'

interface rawMaterialsAndWorkPricesSliceState {
    value: {}[]
}

const initialState: rawMaterialsAndWorkPricesSliceState = {
    value: [],
}

export const rawMaterialsAndWorkPricesSlice = createSlice({
    name: 'rawMaterialsAndWorkPricesSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = rawMaterialsAndWorkPricesSlice.actions

export default rawMaterialsAndWorkPricesSlice.reducer