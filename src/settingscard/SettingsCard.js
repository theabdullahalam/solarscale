import './SettingsCard.scss'

import BiSettings from './BiSettings'
import { useDispatch } from 'react-redux'
import { setSizeMode, setUnits } from './settingsSlice'


function SettingsCard(props){

    let rd_options = [   
        {
            label: 'RADIUS',
            action: setSizeMode,
            payload: 'radius'
        },
        {
            label: 'DIAMETER',
            action: setSizeMode,
            payload: 'diameter'
        }
    ]

    let unit_options = [
        {
            label: 'METRIC',
            action: setUnits,
            payload: 'metric'
        },
        {
            label: 'IMPERIAL',
            action: setUnits,
            payload: 'imperial'
        }
    ]

    return(
        <div className="SettingsCard">
            <h2>settings</h2>
            <BiSettings title="object size" options={rd_options} />
            <BiSettings title="units" options={unit_options} />
        </div>
    )
}

export default SettingsCard