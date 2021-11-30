import { useState } from 'react'

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

import {
    setLoading,
    setError
} from '../solarSystemSlice'

import {
    selectSizeMode, selectUnits
} from '../../settingscard/settingsSlice'

import { useSelector, useDispatch } from 'react-redux';

import './SetterCard.scss'
import { get_previous_planet } from '../helpers';
import { fetchByDistance, fetchByGap, fetchBySize } from '../api';
import { setBodies } from '../solarSystemSlice';
import convert from 'convert-units';

function SetterCard(props){

    const dispatch = useDispatch()
    const sizeMode = useSelector(selectSizeMode)
    const unitsmode = useSelector(selectUnits)

    const showSetterCard = useSelector(selectCardState)
    let setterCardClass    
    if (showSetterCard){
        setterCardClass = 'visible'
    }else{
        setterCardClass = 'invisible'
    }

    const [selectedButton, setSelectedButton] = useState('radiusButton')
    const p_title = useSelector(selectPTitle)
    const p_radius = useSelector(selectPRadius)
    const p_distance = useSelector(selectPDistance)
    const p_gap = useSelector(selectPGap)
    const p_previous_title = get_previous_planet(p_title)

    let hideTheCard = e => {
        e.preventDefault()
        if(e.target.classList.contains('SetterCardBackground') || e.target.classList.contains('cancelbutton')){
            dispatch(hideCard())
        }
    }

    let updateRadius = e => {
        e.preventDefault()
        dispatch(setPRadius({
            ...p_radius,
            value: e.target.value
        }))
    }

    let updateRaduisUnit = e => {
        e.preventDefault()
        dispatch(setPRadius({
            ...p_radius,
            unit: e.target.value
        }))
    }

    let updateSunDistance = e => {
        e.preventDefault()
        dispatch(setPDistance({
            ...p_distance,
            value: e.target.value
        }))
    }

    let updateDistanceUnit = e => {
        e.preventDefault()
        dispatch(setPDistance({
            ...p_distance,
            unit: e.target.value
        }))
    }

    let updateGap = e => {
        e.preventDefault()
        dispatch(setPGap({
            ...p_gap,
            value: e.target.value
        }))
    }

    let updateGapUnit = e => {
        e.preventDefault()
        dispatch(setPGap({
            ...p_gap,
            unit: e.target.value
        }))
    }

    let updateUnitDropdowns = () => {
        let inputRows = Array.from(document.getElementsByClassName('inputRow'));
        inputRows.forEach(ir => {

            let p_attribute;
            if (ir.classList.contains('radiusInput')){
                p_attribute = p_radius
            } else if (ir.classList.contains('distanceInput')){
                p_attribute = p_distance
            }else if (ir.classList.contains('gapInput')){
                p_attribute = p_gap
            }

            let count = 1;
            let options = Array.from(ir.lastChild.children);
            options.forEach(op => {
                if (op.value === p_attribute.unit.toLowerCase()){
                    op.setAttribute('selected', '')
                    ir.selectedIndex = count
                }else{
                    op.removeAttribute('selected')
                    count += 1
                }
            })

        });
    }

    updateUnitDropdowns()

    let optionSelected = e => {
        e.preventDefault()
        
        let clickedName = e.target.dataset.btnName;
        setSelectedButton(clickedName)
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



    let updateBodies = e => {

        // SHOW THE LOADER
        // let loader = document.getElementsByClassName('loadergif')[0]
        // loader.classList.remove('hidden')
        dispatch(setLoading(true))

        // hide the card
        dispatch(hideCard())
        let fetcher_method = null
        let pobj = null

        // p_radius is a variable that hold the size of the object sent by SolarSystem
        // it may contain the diameter of the object if that's what is set
        let theradius = (sizeMode.toLowerCase() === 'radius') ? p_radius.value : p_radius.value/2
        console.log(theradius);

        if (selectedButton === 'radiusButton'){
            pobj = {
                object: p_title,
                radius: convert(theradius).from(p_radius.unit.toLowerCase()).to('cm')
            }
            fetcher_method = fetchBySize
        }else if (selectedButton === 'distanceButton'){
            pobj = {
                object: p_title,
                distance: convert(p_distance.value).from(p_distance.unit.toLowerCase()).to('cm')
            }
            fetcher_method = fetchByDistance
        }else if(selectedButton === 'gapButton'){
            pobj = {
                object: p_title,
                gap: convert(p_gap.value).from(p_gap.unit.toLowerCase()).to('cm')
            }
            fetcher_method = fetchByGap
        }



        // clear planets
        dispatch(setBodies([]))
        

        fetcher_method(pobj)
        .then(
            data => {
                let bodies = data.bodies
                bodies.sort((a,b)=>{
                    return a.p_position - b.p_position
                })
                dispatch(setBodies(bodies))
                dispatch(setLoading(false))
            }
        )
        .catch(err => {
            console.log(err);
            dispatch(setError('There was an error contacting the server'))
            dispatch(setLoading(false))
        })

    }

    let circleColorStyle = {
        backgroundColor: props.color
    }

    let units_to_show;
    let metric_units = ['mm', 'cm', 'm', 'km']
    let imperial_units = ['in', 'ft', 'mi']
    units_to_show = (unitsmode === 'metric') ? metric_units : imperial_units

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


                {/* the visibility class is 'bleh' because the word 'invisible' wasn't working for some reason even though it's just a string -_- */}
                <div className="optionRow">
                    <button className="selected" data-btn-name="radiusButton" onClick={optionSelected}>{sizeMode.toUpperCase()}</button>
                    <button data-btn-name="distanceButton" onClick={optionSelected} className={p_title.toUpperCase() === 'SUN' ? 'bleh' : ''}>DISTANCE FROM SUN</button>
                    <button data-btn-name="gapButton" onClick={optionSelected} className={p_title.toUpperCase() === 'SUN' ? 'bleh' : ''}>DISTANCE FROM {p_previous_title}</button>
                </div>




                <form className="inputform">


                    {/* RADIUS */}
                    <div className="inputRow visible radiusInput">

                        <input
                            value={p_radius.value}
                            onChange={updateRadius}
                            type="text"
                        ></input>
                        <select onChange={updateRaduisUnit}>
                            {
                                units_to_show.map(u => <option value={u} key={u}>{u.toUpperCase()}</option>)
                            }
                        </select>

                    </div>


                    {/* DISTANCE */}
                    <div className="inputRow distanceInput">

                        <input
                            value={p_distance.value}
                            onChange={updateSunDistance}
                            type="text"
                        ></input>
                        <select onChange={updateDistanceUnit}>
                            {
                                units_to_show.map(u => <option value={u} key={u}>{u.toUpperCase()}</option>)
                            }
                        </select>

                    </div>

                    {/* GAP */}
                    <div className="inputRow gapInput">

                        <input
                            value={p_gap.value}
                            onChange={updateGap}
                            type="text"
                        ></input>
                        <select onChange={updateGapUnit}>
                            {
                                units_to_show.map(u => <option value={u} key={u}>{u.toUpperCase()}</option>)
                            }
                        </select>

                    </div>

                </form>

                <div className="buttons">
                    <button onClick={hideTheCard} className="cancelbutton">CANCEL</button>
                    <button onClick={updateBodies}>SET</button>
                </div>

            </div>
        </div>
    )
}

export default SetterCard