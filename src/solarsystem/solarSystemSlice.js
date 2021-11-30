import { createSlice } from '@reduxjs/toolkit'

export const solarSystemSlice = createSlice({

    name: 'solarSystem',
    initialState: {
        bodies: [],
        loading: true,
        error: null
    },
    reducers: {
        setBodies: (state, action) => {
            state.bodies = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }

})

export const {setBodies, setLoading, setError} = solarSystemSlice.actions

export const selectBodies = state => state.solarsystem.bodies
export const selectLoading = state => state.solarsystem.loading
export const selectError = state => state.solarsystem.error

export default solarSystemSlice.reducer