import { createSlice } from '@reduxjs/toolkit'

interface rawMaterialsAndWorkPricesChangedSliceState {
    value: number
}

const initialState: rawMaterialsAndWorkPricesChangedSliceState = {
    value: 0,
}

export const rawMaterialsAndWorkPricesChangedSlice = createSlice({
    name: 'rawMaterialsAndWorkPricesChangedSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.value = state.value + 1;
        }
    },
})

export const { start } = rawMaterialsAndWorkPricesChangedSlice.actions

export default rawMaterialsAndWorkPricesChangedSlice.reducer