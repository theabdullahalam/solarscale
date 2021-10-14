import { configureStore } from '@reduxjs/toolkit'
import solarSystemReducer from '../solarsystem/solarSystemSlice'
import valueSetterReducer from '../solarsystem/valuesetter/valueSetterSlice'

export default configureStore({
    reducer: {
        solarsystem: solarSystemReducer,
        valuesetter: valueSetterReducer
    }
})
