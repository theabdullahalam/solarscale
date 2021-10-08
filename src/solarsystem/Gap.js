import './Gap.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Gap(props){

    return (
        <div className="Gap">
            <FontAwesomeIcon icon={faArrowUp} className="arrow"/>
            <span>GAP: {props.gap}CM</span>
            <span>DISTANCE FROM SUN: {props.distance}CM</span>
            <FontAwesomeIcon icon={faArrowDown} className="arrow"/>
        </div>
    )
}

export default Gap