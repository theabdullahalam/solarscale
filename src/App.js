import './App.scss';

import SolarSystem from './solarsystem/SolarSystem';
import SettingsCard from './settingscard/SettingsCard';
import InfoCard from './infocard/InfoCard';
import SetterCard from './solarsystem/valuesetter/SetterCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App() {

  const [settingsCardState, setSettingsCardState] = useState(true)
  const [infoCardState, setinfoCardState] = useState(true)

  let showSettingsCard = e => {

    let settingsCard = document.getElementsByClassName('SettingsCard')[0]
    let settingsBg = document.getElementsByClassName('SettingsBg')[0]

    settingsCard.classList.add('floating')
    settingsBg.classList.remove('invisible')
    settingsBg.classList.add('visible')
    

  }

  let showInfoCard = e => {
    
    let infoCard = document.getElementsByClassName('InfoCard')[0]
    let infoBg = document.getElementsByClassName('InfoBg')[0]

    infoCard.classList.add('floating')
    infoBg.classList.remove('invisible')
    infoBg.classList.add('visible')
    
  }

  return (
    <div className="App">
      <SetterCard />
      <SolarSystem />
      <InfoCard />
      <SettingsCard />
      <FontAwesomeIcon icon={faCog} className="cornerButtons" onClick={showSettingsCard}/>
      <FontAwesomeIcon icon={faInfoCircle} className="cornerButtons" onClick={showInfoCard}/>
    </div>
  );
}

export default App;
