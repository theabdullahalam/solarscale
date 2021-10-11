import './Planet.scss'

import {useSelector, useDispatch} from 'react-redux'
import { getSensibleUnits } from './unitHelper'

function Planet(props){

    let circleColorStyle = {
        backgroundColor: props.color
    }

    let sensibleSize = getSensibleUnits({
        value: props.radius,
        unit: 'cm'
    })

    return (
        <div className="Planet">
            <div className="namediv">
                <div className="circle" style={circleColorStyle}></div>
                <span className="title">{props.title}</span>
            </div>            
            <span className="size">RADIUS: {sensibleSize.value} {sensibleSize.unit}</span>
        </div>
    )
}

export default Planet