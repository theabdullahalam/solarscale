import { createSlice } from '@reduxjs/toolkit'

export const valueSetterSlice = createSlice({

    name: 'valueSetter',
    initialState: {
        cardShowing: false,
        p_title: '',
        p_radius: {
            value: 0,
            unit: 'cm'
        },
        p_distance: {
            value: 0,
            unit: 'cm'
        },
        p_gap: {
            value: 0,
            unit: 'cm'
        }
    },
    reducers: {
        showCard: state => {
            state.cardShowing = true
        },
        hideCard: state => {
            state.cardShowing = false
        },
        setPTitle: (state, action) => {
            state.p_title = action.payload
        },
        setPRadius: (state, action) => {
            state.p_radius = action.payload
        },
        setPDistance: (state, action) => {
            state.p_distance = action.payload
        },
        setPGap: (state, action) => {
            state.p_gap = action.payload
        }
    }

})

export const {
    showCard, 
    hideCard,
    setPTitle,
    setPRadius,
    setPDistance,
    setPGap
} = valueSetterSlice.actions

export const selectCardState = state => state.valuesetter.cardShowing
export const selectPTitle = state => state.valuesetter.p_title
export const selectPRadius = state => state.valuesetter.p_radius
export const selectPDistance = state => state.valuesetter.p_distance
export const selectPGap = state => state.valuesetter.p_gap

export default valueSetterSlice.reducer