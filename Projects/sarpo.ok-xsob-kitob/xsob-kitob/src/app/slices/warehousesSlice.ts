import { createSlice } from '@reduxjs/toolkit'

interface warehousesSliceState {
    value: {}[]
}

const initialState: warehousesSliceState = {
    value: [],
}

export const warehousesSlice = createSlice({
    name: 'warehousesSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = warehousesSlice.actions

export default warehousesSlice.reducer