import './SettingsCard.scss'

import BiSettings from './BiSettings'

function SettingsCard(props){
    return(
        <div className="SettingsCard">
            <h2>settings</h2>
            <BiSettings />
            <BiSettings />
        </div>
    )
}

export default SettingsCard