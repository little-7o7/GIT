import { createSlice } from '@reduxjs/toolkit'

interface shopsChangedSliceState {
    value: number
}

const initialState: shopsChangedSliceState = {
    value: 0,
}

export const shopsChangedSlice = createSlice({
    name: 'shopsChangedSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.value = state.value + 1;
        }
    },
})

export const { start } = shopsChangedSlice.actions

export default shopsChangedSlice.reducer