import { createSlice } from '@reduxjs/toolkit'

interface shopsSliceState {
    value: {}[]
}

const initialState: shopsSliceState = {
    value: [],
}

export const shopsSlice = createSlice({
    name: 'shopsSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = shopsSlice.actions

export default shopsSlice.reducer