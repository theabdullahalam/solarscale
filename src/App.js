import logo from './logo.svg';
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

  let toggleSettingsCard = e => {

    setSettingsCardState(!settingsCardState)
    let settingsCard = document.getElementsByClassName('SettingsCard')[0]

    if (settingsCardState){
      settingsCard.classList.add('floating')
    } else {
      settingsCard.classList.remove('floating')
    }

  }

  let toggleInfoCard = e => {

    setinfoCardState(!infoCardState)
    let infoCard = document.getElementsByClassName('InfoCard')[0]

    if (infoCardState){
      infoCard.classList.add('floating')
    } else {
      infoCard.classList.remove('floating')
    }

  }

  return (
    <div className="App">
      <SetterCard />
      <SolarSystem />
      <InfoCard />
      <SettingsCard />
      <FontAwesomeIcon icon={faCog} className="cornerButtons" onClick={toggleSettingsCard}/>
      <FontAwesomeIcon icon={faInfoCircle} className="cornerButtons" onClick={toggleInfoCard}/>
    </div>
  );
}

export default App;
