import { configureStore } from '@reduxjs/toolkit'
import solarSystemReducer from '../solarsystem/solarSystemSlice'

export default configureStore({
    reducer: {
        solarsystem: solarSystemReducer
    }
})
