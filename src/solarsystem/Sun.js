import './Sun.scss'

import {useSelector, useDispatch} from 'react-redux'

function Sun(props){

    return (
        <div className="Sun" style={{backgroundColor: props.color}}>
            <div className="details">
                <span className="title">{props.title}</span>
                <span className="size">RADIUS: {props.size}CM</span>
            </div>
        </div>
    )
}

export default Sun