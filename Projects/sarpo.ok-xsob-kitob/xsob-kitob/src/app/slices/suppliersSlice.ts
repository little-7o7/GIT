import { createSlice } from '@reduxjs/toolkit'

interface suppliersSliceState {
    value: {}[]
}

const initialState: suppliersSliceState = {
    value: [],
}

export const suppliersSlice = createSlice({
    name: 'suppliersSlice',
    initialState,
    reducers: {
        start: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { start } = suppliersSlice.actions

export default suppliersSlice.reducer