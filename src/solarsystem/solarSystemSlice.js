import { createSlice } from '@reduxjs/toolkit'

export const solarSystemSlice = createSlice({

    name: 'solarSystem',
    initialState: {
        bodies: []
    },
    reducers: {
        setBodies: (state, action) => {
            state.bodies = action.payload
        }
    }

})

export const {setBodies} = solarSystemSlice.actions

export const selectBodies = state => state.solarsystem.bodies

export default solarSystemSlice.reducer