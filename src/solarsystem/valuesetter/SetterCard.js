import { useState } from 'react'

import {
    selectCardState,
    hideCard
} from './valueSetterSlice'
import { useSelector, useDispatch } from 'react-redux';

import './SetterCard.scss'

function SetterCard(props){

    const dispatch = useDispatch()

    const showSetterCard = useSelector(selectCardState)
    let setterCardClass    
    if (showSetterCard == true){
        setterCardClass = 'visible'
    }else{
        setterCardClass = 'invisible'
    }

    let [radius, setRadius] = useState(0)
    let [sunDistance, setSunDistance] = useState(0)
    let [gap, setGap] = useState(0)

    let hideTheCard = e => {
        e.preventDefault()
        if(e.target.classList.contains('SetterCardBackground') || e.target.classList.contains('cancelbutton')){
            dispatch(hideCard())
        }
    }

    let updateRadius = e => {
        e.preventDefault()
        setRadius(e.target.value)
    }

    let updateSunDistance = e => {
        e.preventDefault()
        setSunDistance(e.target.value)
    }

    let updateGap = e => {
        e.preventDefault()
        setGap(e.target.value)
    }

    let circleColorStyle = {
        backgroundColor: props.color
    }

    return (
        <div 
            className={['SetterCardBackground', setterCardClass].join(' ')}
            onClick={hideTheCard}
        >
            <div className="SetterCard">
                <div className="namediv">
                    <div className="circle" style={circleColorStyle}></div>
                    <span className="title">VENUS</span>
                </div>

                <form className="inputform">

                    <label>RADIUS</label>
                    <input
                        value={radius}
                        onChange={updateRadius}
                        type="text"
                    ></input>

                    <label>DISTANCE FROM SUN</label>
                    <input
                        value={sunDistance}
                        onChange={updateSunDistance}
                        type="text"
                    ></input>

                    <label>DISTANCE FROM MERCURY</label>
                    <input
                        value={gap}
                        onChange={updateGap}
                        type="text"
                    ></input>

                </form>

                <div className="buttons">
                    <button onClick={hideTheCard} className="cancelbutton">CANCEL</button>
                    <button>SET</button>
                </div>

            </div>
        </div>
    )
}

export default SetterCard