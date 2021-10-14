import { createSlice } from '@reduxjs/toolkit'

export const valueSetterSlice = createSlice({

    name: 'valueSetter',
    initialState: {
        cardShowing: true
    },
    reducers: {
        showCard: state => {
            state.cardShowing = true
        },
        hideCard: state => {
            state.cardShowing = false
        }        
    }

})

export const {showCard, hideCard} = valueSetterSlice.actions

export const selectCardState = state => state.valuesetter.cardShowing

export default valueSetterSlice.reducer