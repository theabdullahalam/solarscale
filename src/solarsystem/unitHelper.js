var convert = require('convert-units')

const roundTo = (num, places) => {
    let multiplier = Math.pow(10, places)
    return Math.round((num + Number.EPSILON) * multiplier) / multiplier
}

export const getSensibleUnits = function(unitObj){

    // obj = {
    //     value: 500,
    //     unit: 'cm'
    // }

    let unit = unitObj.unit
    let value = unitObj.value

    console.log(unitObj);

    if (unit.toLowerCase() === 'cm'){

        if (value > 100000){
            unit = 'km'
            value = convert(value).from(unitObj.unit).to(unit)
        } else if (value > 100) {
            unit = 'm'
            value = convert(value).from(unitObj.unit).to(unit)
        } else if (value < 1) {
            unit = 'mm'
            value = convert(value).from(unitObj.unit).to(unit)
        }

    }

    console.log('Returned: ' + unit + ' ' + value);

    return {
        value: roundTo(value, 2),
        unit: unit.toUpperCase()
    }

}