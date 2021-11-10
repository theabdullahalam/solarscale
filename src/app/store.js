import { configureStore } from '@reduxjs/toolkit'
import solarSystemReducer from '../solarsystem/solarSystemSlice'
import valueSetterReducer from '../solarsystem/valuesetter/valueSetterSlice'
import settingsReducer from '../settingscard/settingsSlice'

export default configureStore({
    reducer: {
        solarsystem: solarSystemReducer,
        valuesetter: valueSetterReducer,
        settings: settingsReducer
    }
})
