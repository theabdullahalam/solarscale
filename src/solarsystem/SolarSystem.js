import './SolarSystem.scss'

import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchPlanets } from './fetchPlanets'
import {fetchDefaultPlanets} from './api'

import Sun from './Sun'
import Planet from './Planet'
import Gap from './Gap'

import {
  setBodies,
  selectBodies,
} from './solarSystemSlice'

function getComponentsFromBodies(bodies){

    let bodyComponents = []
    bodies.forEach(body => {
        if (body.p_title === 'SUN'){
            bodyComponents.push(<Sun title={body.p_title} radius={body.p_radius} color={body.p_color} />)
        }else {
            bodyComponents.push(<Gap distance={body.p_distance} gap={body.p_gap} />)
            bodyComponents.push(<Planet title={body.p_title} color={body.p_color} radius={body.p_radius} bodyobj={body} />)
        }      
    });
    return bodyComponents

}

function SolarSystem(props){

    const bodies = useSelector(selectBodies)
    const dispatch = useDispatch()

    // FETCH INITIAL
    useEffect(()=>{
        fetchDefaultPlanets().then(data=>{
            let bodies = data.bodies
            bodies.sort((a,b)=>{
                return a.p_position - b.p_position
            })
            dispatch(setBodies(bodies))
        })        
    }, [])

    return (
        <div className="SolarSystem">
            {getComponentsFromBodies(bodies)}
        </div>
    )
}

export default SolarSystem