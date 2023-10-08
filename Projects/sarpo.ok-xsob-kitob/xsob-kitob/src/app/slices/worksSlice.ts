import { createSlice } from '@reduxjs/toolkit'

interface worksSliceState {
    value: {}[]
}

const initialState: worksSliceState = {
    value: [],
}

export const worksSlice = createSlice({
    name: 'worksSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = worksSlice.actions

export default worksSlice.reducer