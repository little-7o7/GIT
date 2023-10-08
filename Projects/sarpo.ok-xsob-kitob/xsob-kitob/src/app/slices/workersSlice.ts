import { createSlice } from '@reduxjs/toolkit'

interface workersSliceState {
    value: {}[]
}

const initialState: workersSliceState = {
    value: [],
}

export const workersSlice = createSlice({
    name: 'workersSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = workersSlice.actions

export default workersSlice.reducer