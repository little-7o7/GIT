import { createSlice } from '@reduxjs/toolkit'

interface warehousesChangedSliceState {
    value: number
}

const initialState: warehousesChangedSliceState = {
    value: 0,
}

export const warehousesChangedSlice = createSlice({
    name: 'warehousesChangedSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.value = state.value + 1;
        }
    },
})

export const { start } = warehousesChangedSlice.actions

export default warehousesChangedSlice.reducer