import './Planet.scss'

import {useSelector, useDispatch} from 'react-redux'

function Planet(props){

    let circleColorStyle = {
        backgroundColor: props.color
    }

    return (
        <div className="Planet">
            <div className="namediv">
                <div className="circle" style={circleColorStyle}></div>
                <span className="title">{props.title}</span>
            </div>            
            <span className="size">RADIUS: {props.radius}CM</span>
        </div>
    )
}

export default Planet