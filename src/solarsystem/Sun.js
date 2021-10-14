import './Sun.scss'

// import {useSelector, useDispatch} from 'react-redux'
import { getSensibleUnits } from './unitHelper'
import { useState } from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {
    showCard,
    selectCardState
} from './valuesetter/valueSetterSlice'

function Sun(props){

    const dispatch = useDispatch()

    let sensibleSize = getSensibleUnits({
        value: props.radius,
        unit: 'cm'
    })

    let openSetterCard = e => {
        dispatch(showCard())
    }

    return (
        <div className="Sun" style={{backgroundColor: props.color}} onClick={openSetterCard}>
            <div className="details">
                <span className="title">{props.title}</span>
                <span className="size">RADIUS: {sensibleSize.value} {sensibleSize.unit}</span>
            </div>
        </div>
    )
}

export default Sun