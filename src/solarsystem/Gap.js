import './Gap.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import { getSensibleUnits } from './unitHelper'

import {useSelector, useDispatch} from 'react-redux'

import {
    showCard,
    selectCardState
} from './valuesetter/valueSetterSlice'
import { selectUnits } from '../settingscard/settingsSlice'

function Gap(props){

    const dispatch = useDispatch()
    const unitsmode = useSelector(selectUnits)

    let sensibleGap = getSensibleUnits({
        value: props.gap,
        unit: 'cm'
    }, unitsmode)

    let sensibleDistance = getSensibleUnits({
        value: props.distance,
        unit: 'cm'
    }, unitsmode)

    let openSetterCard = e => {
        dispatch(showCard())
    }

    return (
        <div className="Gap">
            <FontAwesomeIcon icon={faArrowUp} className="arrow"/>
            <span>GAP: {sensibleGap.value} {sensibleGap.unit}</span>
            <span>DISTANCE FROM SUN: {sensibleDistance.value} {sensibleDistance.unit}</span>
            <FontAwesomeIcon icon={faArrowDown} className="arrow"/>
        </div>
    )
}

export default Gap