import { createSlice } from '@reduxjs/toolkit'

interface workersChangedSliceState {
    value: number
}

const initialState: workersChangedSliceState = {
    value: 0,
}

export const workersChangedSlice = createSlice({
    name: 'workersChangedSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.value = state.value + 1;
        }
    },
})

export const { start } = workersChangedSlice.actions

export default workersChangedSlice.reducer