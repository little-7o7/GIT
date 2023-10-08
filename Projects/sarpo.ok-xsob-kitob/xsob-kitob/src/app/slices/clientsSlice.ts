import { createSlice } from '@reduxjs/toolkit'

interface clientsSliceState {
    value: {}[]
}

const initialState: clientsSliceState = {
    value: [],
}

export const clientsSlice = createSlice({
    name: 'clientsSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = clientsSlice.actions

export default clientsSlice.reducer