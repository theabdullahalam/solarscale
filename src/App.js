import logo from './logo.svg';
import './App.scss';

import SolarSystem from './solarsystem/SolarSystem';
import SettingsCard from './settingscard/SettingsCard';
import InfoCard from './infocard/InfoCard';

function App() {
  return (
    <div className="App">
      <SolarSystem />
      <InfoCard />
      <SettingsCard />
    </div>
  );
}

export default App;
