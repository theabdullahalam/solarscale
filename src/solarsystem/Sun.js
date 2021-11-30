import './Sun.scss'

import { useEffect } from 'react'
import { getSensibleUnits } from './unitHelper'

import {useSelector, useDispatch} from 'react-redux'

import {
    selectSizeMode, selectUnits
} from '../settingscard/settingsSlice'

import {
    showCard,
    setPTitle,
    setPRadius,
} from './valuesetter/valueSetterSlice'

function Sun(props){

    const dispatch = useDispatch()
    const sizeMode = useSelector(selectSizeMode)
    const unitsmode = useSelector(selectUnits)

    let sensibleSize = getSensibleUnits({
        value: sizeMode === 'radius' ? props.radius : props.radius * 2,
        unit: 'cm'
    }, unitsmode)

    let openSetterCard = e => {
        dispatch(setPRadius(sensibleSize))
        dispatch(setPTitle(props.title))
        dispatch(showCard())
    }




    // mobile info card theme on scroll... stuff...
    useEffect(()=>{
        let observer_options = {
            root: null,
            threshold: 0.05
        }
    
        let onSunVisible = (entries, observer) => {

            let infobutton = document.getElementsByClassName('fa-info-circle')[0]

            entries.forEach(entry => {
                if(entry.isIntersecting){
                    infobutton.classList.remove('light')
                }else{
                    infobutton.classList.add('light')
                }
            })
        }
    
        let observer = new IntersectionObserver(onSunVisible, observer_options)
        let sunelement = document.getElementsByClassName('Sun')[0]
        observer.observe(sunelement)
        
    }, [])
    
    




    return (
        <div className="Sun" style={{backgroundColor: props.color}} onClick={openSetterCard}>
            <div className="details">
                <span className="title">{props.title}</span>
                <span className="size">{sizeMode.toUpperCase()}: {sensibleSize.value} {sensibleSize.unit}</span>
            </div>
        </div>
    )
}

export default Sun