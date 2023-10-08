import { createSlice } from '@reduxjs/toolkit'

interface suppliersChangedSliceState {
    value: number
}

const initialState: suppliersChangedSliceState = {
    value: 0,
}

export const suppliersChangedSlice = createSlice({
    name: 'suppliersChangedSlice',
    initialState,
    reducers: {
        start: (state) => {
            state.value = state.value + 1;
        }
    },
})

export const { start } = suppliersChangedSlice.actions

export default suppliersChangedSlice.reducer