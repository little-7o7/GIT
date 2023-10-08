import { createSlice } from '@reduxjs/toolkit'

interface worksChangedSliceState {
    value: number
}

const initialState: worksChangedSliceState = {
    value: 0,
}

export const worksChangedSlice = createSlice({
    name: 'worksChangedSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.value = state.value + 1;
        }
    },
})

export const { start } = worksChangedSlice.actions

export default worksChangedSlice.reducer