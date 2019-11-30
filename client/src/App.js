import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PCT from './components/PCT/PCT';
import AT from './components/AT/AT';
import JMT from './components/JMT/JMT';
import CDT from './components/CDT/CDT';
import LT from './components/LT/LT';
import TrailTables from './components/TrailTables/TrailTables';
import Contact from './components/Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

function Dropdown() {
  const[selectedOption, setSelectedOption] = useState('Choose a trail...')
  let history = useHistory();

  const handleTrailSelect = e => {
    e.preventDefault();
    setSelectedOption(e.target.name);
    history.push(e.target.value);
  };

  return (
    <div id='the-dropdown-container'>
        <select id='the-dropdown' onChange={handleTrailSelect} name={selectedOption}>
          <option value='/' name='Compare all trails...'>Choose a trail...</option>
          <option value='/pct' name='Pacific Crest Trail'>Pacific Crest Trail</option>
          <option value='/at' name='Appalachian Trail'>Appalachian Trail</option>
        </select>
    </div>
);
}

function App() {
  return (
    <Router>
      <Switch>
        <div style={{ height: '100%' }}>
          <Navbar />
          <main style={{ marginTop: '92px' }}>
            <Route path='/' exact>
              <Dropdown />
              <TrailTables />
            </Route>
            <Route path='/pct' exact>
              <Dropdown />
              <PCT />
            </Route>
            <Route path='/at' exact>
              <Dropdown />
              <AT />
            </Route>
            <Route path='/cdt' exact>
              <CDT />
            </Route>
            <Route path='/longtrail' exact>
              <LT />
            </Route>
            <Route path='/jmt' exact>
              <JMT />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
          </main>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
