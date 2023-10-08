import { createSlice } from '@reduxjs/toolkit'

interface clientsChangedSliceState {
    value: number
}

const initialState: clientsChangedSliceState = {
    value: 0,
}

export const clientsChangedSlice = createSlice({
    name: 'clientsChangedSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.value = state.value + 1;
        }
    },
})

export const { start } = clientsChangedSlice.actions

export default clientsChangedSlice.reducer