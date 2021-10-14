import logo from './logo.svg';
import './App.scss';

import SolarSystem from './solarsystem/SolarSystem';
import SettingsCard from './settingscard/SettingsCard';
import InfoCard from './infocard/InfoCard';
import SetterCard from './solarsystem/valuesetter/SetterCard'

function App() {

  return (
    <div className="App">
      <SetterCard />
      <SolarSystem />
      <InfoCard />
      <SettingsCard />
    </div>
  );
}

export default App;
