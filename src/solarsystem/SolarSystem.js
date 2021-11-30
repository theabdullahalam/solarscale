import './SolarSystem.scss'
import loader from '../loader10.gif'

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {fetchDefaultPlanets} from './api'

import Sun from './Sun'
import Planet from './Planet'
import Gap from './Gap'
import Error from './Error'

import {
  setBodies,
  selectBodies,
  setLoading,
  selectLoading,
  setError,
  selectError
} from './solarSystemSlice'

function getComponentsFromBodies(bodies){

    let bodyComponents = []
    bodies.forEach(body => {
        if (body.p_title === 'SUN'){
            bodyComponents.push(<Sun title={body.p_title} radius={body.p_radius} color={body.p_color} bodyobj={body} key={body.p_title}/>)
        }else {
            bodyComponents.push(<Gap distance={body.p_distance} gap={body.p_gap} key={body.p_title + '_gap'}/>)
            bodyComponents.push(<Planet title={body.p_title} color={body.p_color} radius={body.p_radius} bodyobj={body} key={body.p_title}/>)
        }      
    });
    return bodyComponents

}

function SolarSystem(props){

    const bodies = useSelector(selectBodies)
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)

    const dispatch = useDispatch()

    // FETCH INITIAL
    useEffect(()=>{
        fetchDefaultPlanets()
        .then(data=>{
            let bodies = data.bodies
            bodies.sort((a,b)=>{
                return a.p_position - b.p_position
            })
            dispatch(setBodies(bodies))
            dispatch(setLoading(false))
        })
        .catch(error => {
            console.log(error);
            dispatch(setError('There was an error contacting the server'))
            dispatch(setLoading(false))
        })
    }, [])

    return (
        <div className="SolarSystem">
            {loading && <img src={loader} className="loadergif" />}
            <Error message={error} />
            {getComponentsFromBodies(bodies)}
        </div>
    )
}

export default SolarSystem