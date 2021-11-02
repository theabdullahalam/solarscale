import { useEffect, useState } from 'react'

import { getSensibleUnits } from '../unitHelper'

import {
    selectCardState,
    selectPTitle,
    selectPRadius,
    selectPDistance,
    selectPGap,
    hideCard,
    setPRadius,
    setPDistance,
    setPGap
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

    const p_title = useSelector(selectPTitle)
    const p_radius = useSelector(selectPRadius)
    const p_distance = useSelector(selectPDistance)
    const p_gap = useSelector(selectPGap)

    let hideTheCard = e => {
        e.preventDefault()
        if(e.target.classList.contains('SetterCardBackground') || e.target.classList.contains('cancelbutton')){
            dispatch(hideCard())
        }
    }

    let updateRadius = e => {
        e.preventDefault()
        dispatch(setPRadius(e.target.value))
    }

    let updateSunDistance = e => {
        e.preventDefault()
        dispatch(setPDistance(e.target.value))
    }

    let updateGap = e => {
        e.preventDefault()
        dispatch(setPGap(e.target.value))
    }

    let updateUnitDropdowns = () => {
        let inputRows = Array.from(document.getElementsByClassName('inputRow'));
        inputRows.forEach(ir => {
            if (ir.classList.contains('radiusInput')){
                let options = Array.from(ir.lastChild.children);
                options.forEach(op => {
                    if (op.value === p_radius.unit.toLowerCase()){
                        op.setAttribute('selected', '')
                    }else{
                        op.removeAttribute('selected')
                    }
                })
            }
        });
    }

    updateUnitDropdowns()

    let optionSelected = e => {
        e.preventDefault()
        let clickedName = e.target.dataset.btnName;
        let buttons = Array.from(e.currentTarget.parentNode.children);

        // SELECT THE RIGHT BUTTON
        buttons.forEach(btn => {
            if (btn.dataset.btnName === clickedName){
                btn.classList.add("selected")
            }else{
                btn.classList.remove("selected")
            }
        })

        // SHOW/HIDE THE APPROPRIATE ROW
        let inputRows = Array.from(document.getElementsByClassName('inputRow'));
        inputRows.forEach(ir => {
            // radius
            if (ir.classList.contains('radiusInput')){
                if (clickedName === 'radiusButton'){
                    ir.classList.add('visible');
                }else{
                    ir.classList.remove('visible');
                }
            }

            // distance
            if (ir.classList.contains('distanceInput')){
                if (clickedName === 'distanceButton'){
                    ir.classList.add('visible');
                }else{
                    ir.classList.remove('visible');
                }
            }

            // gap
            if (ir.classList.contains('gapInput')){
                if (clickedName === 'gapButton'){
                    ir.classList.add('visible');
                }else{
                    ir.classList.remove('visible');
                }
            }


        })

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
                    <span className="title">{p_title}</span>
                </div>



                <div className="optionRow">
                    <button className="selected" data-btn-name="radiusButton" onClick={optionSelected}>RADIUS</button>
                    <button data-btn-name="distanceButton" onClick={optionSelected}>DISTANCE FROM SUN</button>
                    <button data-btn-name="gapButton" onClick={optionSelected}>DISTANCE FROM MERCURY</button>
                </div>




                <form className="inputform">


                    {/* RADIUS */}
                    <div className="inputRow visible radiusInput">

                        <input
                            value={p_radius.value}
                            onChange={updateRadius}
                            type="text"
                        ></input>
                        <select>
                            <option value="km">KM</option>
                            <option value="m">M</option>
                            <option value="cm">CM</option>
                            <option value="mm">MM</option>
                        </select>

                    </div>


                    {/* DISTANCE */}
                    <div className="inputRow distanceInput">

                        <input
                            value={p_distance}
                            onChange={updateSunDistance}
                            type="text"
                        ></input>
                        <select>
                            <option value="km">KM</option>
                            <option value="m">M</option>
                            <option value="cm">CM</option>
                            <option value="mm">MM</option>
                        </select>

                    </div>

                    {/* GAP */}
                    <div className="inputRow gapInput">

                        <input
                            value={p_gap}
                            onChange={updateGap}
                            type="text"
                        ></input>
                        <select>
                            <option value="km">KM</option>
                            <option value="m">M</option>
                            <option value="cm">CM</option>
                            <option value="mm">MM</option>
                        </select>

                    </div>

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