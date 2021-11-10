import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    
    name: 'settings',
    initialState: {
        size: 'radius',
        units: 'metric'
    },
    reducers: {
        setSizeMode: (state, action) => {
            state.size = action.payload
        },
        setUnits: (state, action) => {
            state.units = action.payload
        }
    }

})

export const {
    setSizeMode,
    setUnits
} = settingsSlice.actions

export const selectSizeMode = state => state.settings.size
export const selectUnits = state => state.settings.units

export default settingsSlice.reducer