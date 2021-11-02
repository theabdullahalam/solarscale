import './Planet.scss'

import {useSelector, useDispatch} from 'react-redux'
import { getSensibleUnits } from './unitHelper'

import {
    showCard,
    selectCardState,
    setPTitle,
    setPRadius,
    setPDistance,
    setPGap
} from './valuesetter/valueSetterSlice'

function Planet(props){

    const dispatch = useDispatch()

    let circleColorStyle = {
        backgroundColor: props.color
    }

    let sensibleSize = getSensibleUnits({
        value: props.radius,
        unit: 'cm'
    })

    let openSetterCard = e => {
        dispatch(setPRadius(sensibleSize))
        dispatch(setPDistance(props.bodyobj.p_distance))
        dispatch(setPGap(props.bodyobj.p_gap))
        dispatch(setPTitle(props.title))
        dispatch(showCard())
    }

    return (
        <div className="Planet" onClick={openSetterCard}>
            <div className="namediv">
                <div className="circle" style={circleColorStyle}></div>
                <span className="title">{props.title}</span>
            </div>
            <span className="size">RADIUS: {sensibleSize.value} {sensibleSize.unit}</span>
        </div>
    )
}

export default Planet