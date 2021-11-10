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

import {
    selectSizeMode, selectUnits
} from '../settingscard/settingsSlice'

function Planet(props){

    const dispatch = useDispatch()
    const sizeMode = useSelector(selectSizeMode)
    const unitsmode = useSelector(selectUnits)

    let circleColorStyle = {
        backgroundColor: props.color
    }

    // SIZE
    let sensibleSize;
    if (sizeMode === 'diameter'){
        sensibleSize = getSensibleUnits({
            value: props.radius * 2,
            unit: 'cm'
        }, unitsmode)
    } else {
        sensibleSize = getSensibleUnits({
            value: props.radius,
            unit: 'cm'
        }, unitsmode)
    }

    // DISTANCE
    let sensibleDistance = getSensibleUnits({
        value: props.bodyobj.p_distance,
        unit: 'cm'
    }, unitsmode)

    let sensibleGap = getSensibleUnits({
        value: props.bodyobj.p_gap,
        unit: 'cm'
    }, unitsmode)

    

    let openSetterCard = e => {
        dispatch(setPRadius(sensibleSize))
        dispatch(setPDistance(sensibleDistance))
        dispatch(setPGap(sensibleGap))
        dispatch(setPTitle(props.title))
        dispatch(showCard())
    }

    return (
        <div className="Planet" onClick={openSetterCard}>
            <div className="namediv">
                <div className="circle" style={circleColorStyle}></div>
                <span className="title">{props.title}</span>
            </div>
            <span className="size">{sizeMode.toUpperCase()}: {sensibleSize.value} {sensibleSize.unit}</span>
        </div>
    )
}

export default Planet