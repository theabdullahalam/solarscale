import './SettingsCard.scss'

import BiSettings from './BiSettings'
import { setSizeMode, setUnits } from './settingsSlice'


function SettingsCard(props){

    let hideSettingsCard = e => {
        if (e.target.classList.contains('SettingsBg')){
            let settingsCard = document.getElementsByClassName('SettingsCard')[0]
            let settingsBg = document.getElementsByClassName('SettingsBg')[0]

            settingsCard.classList.remove('floating')
            settingsBg.classList.remove('visible')
            settingsBg.classList.add('invisible')
        }        
    }

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
        <div className="SettingsBg" onClick={hideSettingsCard}>
        
            <div className="SettingsCard">
                <h2>settings</h2>
                <BiSettings title="object size" options={rd_options} />
                <BiSettings title="units" options={unit_options} />
            </div>

        </div>
    )
}

export default SettingsCard