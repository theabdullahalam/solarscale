import './Sun.scss'

// import {useSelector, useDispatch} from 'react-redux'
import { getSensibleUnits } from './unitHelper'
import { useState } from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {
    selectSizeMode, selectUnits
} from '../settingscard/settingsSlice'

import {
    showCard,
    setPTitle,
    setPRadius,
    selectCardState
} from './valuesetter/valueSetterSlice'

function Sun(props){

    const dispatch = useDispatch()
    const sizeMode = useSelector(selectSizeMode)
    const unitsmode = useSelector(selectUnits)

    let sensibleSize = getSensibleUnits({
        value: sizeMode === 'radius' ? props.radius : props.radius * 2,
        unit: 'cm'
    }, unitsmode)

    let openSetterCard = e => {
        dispatch(setPRadius(sensibleSize))
        dispatch(setPTitle(props.title))
        dispatch(showCard())
    }

    return (
        <div className="Sun" style={{backgroundColor: props.color}} onClick={openSetterCard}>
            <div className="details">
                <span className="title">{props.title}</span>
                <span className="size">{sizeMode.toUpperCase()}: {sensibleSize.value} {sensibleSize.unit}</span>
            </div>
        </div>
    )
}

export default Sun