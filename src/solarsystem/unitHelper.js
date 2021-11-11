import { useSelector } from 'react-redux'
import { selectUnits } from '../settingscard/settingsSlice'

var convert = require('convert-units')

const roundTo = (num, places) => {
    let multiplier = Math.pow(10, places)
    return Math.round((num + Number.EPSILON) * multiplier) / multiplier
}

export const getSensibleUnits = function(unitObj, unitmode = 'metric'){

    let unit = unitObj.unit
    let value = unitObj.value

    if (unitmode === 'metric'){
        if (unit.toLowerCase() === 'cm'){

            if (value >= 100000){
                unit = 'km'
                value = convert(value).from(unitObj.unit).to(unit)
            } else if (value >= 100) {
                unit = 'm'
                value = convert(value).from(unitObj.unit).to(unit)
            } else if (value < 1) {
                unit = 'mm'
                value = convert(value).from(unitObj.unit).to(unit)
            }
    
        }
    }else{
        if (unit.toLowerCase() === 'cm'){

            value = convert(value).from('cm').to('in')
            unit = 'in'
            let initial_unit = 'in'

            if (value >= 63360){
                unit = 'mi'
            }else if (value >= 12){
                unit = 'ft'
            }

            value = convert(value).from(initial_unit).to(unit)
    
        }
    }    

    return {
        value: roundTo(value, 2),
        unit: unit.toUpperCase()
    }

}