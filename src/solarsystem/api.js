import axios from 'axios'
import config from '../config'

export const fetchDefaultPlanets = () => {
    return new Promise((resolve, reject) => {

        axios.get(`${config.host}/api/defaultplanets`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject('Unknown Error')
            })

    })
}

export const fetchBySize = (planetobj) => {
    return new Promise((resolve, reject) => {

        axios.get(`${config.host}/api/getfromsize`, {params: planetobj})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject('Unknown Error')
            })

    })
}