import './Sun.scss'

// import {useSelector, useDispatch} from 'react-redux'
import { getSensibleUnits } from './unitHelper'
import { useState } from 'react'

function Sun(props){

    let sensibleSize = getSensibleUnits({
        value: props.radius,
        unit: 'cm'
    })

    return (
        <div className="Sun" style={{backgroundColor: props.color}}>
            <div className="details">
                <span className="title">{props.title}</span>
                <span className="size">RADIUS: {sensibleSize.value} {sensibleSize.unit}</span>
            </div>
        </div>
    )
}

export default Sun