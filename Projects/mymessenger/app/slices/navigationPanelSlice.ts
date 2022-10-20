import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface navigationPanelState {
    value: string
}

const initialState: navigationPanelState = {
    value: 'chats',
}

export const navigationPanelSlice = createSlice({
    name: 'navigationPanel',
    initialState,
    reducers: {
        contacts: (state) => {
            state.value = 'contacts'
        },
        chats: (state) => {
            state.value = 'chats'
        },
        profile: (state) => {
            state.value = 'profile'
        },
    },
})

export const { contacts, chats, profile } = navigationPanelSlice.actions

export const selectCount = (state: RootState) => state.navigationPanel.value

export default navigationPanelSlice.reducer