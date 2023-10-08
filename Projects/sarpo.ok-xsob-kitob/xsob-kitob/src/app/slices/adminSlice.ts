import { createSlice } from '@reduxjs/toolkit'

interface adminSliceState {
    value: {}
}

const initialState: adminSliceState = {
    value: {},
}

export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = adminSlice.actions

export default adminSlice.reducer