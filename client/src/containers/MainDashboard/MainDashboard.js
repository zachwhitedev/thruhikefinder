import React, { useState, useEffect, useCallback } from 'react';
import styles from './MainDashboard.module.css';
import TrailTable from '../../components/TrailTable/TrailTable';
import TripleCrownTable from '../../components/TripleCrownTable/TripleCrownTable';
import PCT from '../../components/PCT/PCT';
import AT from '../../components/AT/AT';
import CDT from '../../components/CDT/CDT';
import JMT from '../../components/JMT/JMT';
import Contact from '../../components/Contact/Contact';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

function MainDashboard(props) {
  const [headerTitle, setHeaderTitle] = useState('Choose a trail...');
  const [showSideDrawer, sideDrawer] = useState(false);

  const trailSelect = e => {
    setHeaderTitle(e.target.value);
  };

  const goToContact = () => {
      setHeaderTitle('Contact');
  };

  const sideDrawerClosedHandler = () => {
    sideDrawer(false);
}

  const sideDrawerToggleHandler = () => {
    sideDrawer(!showSideDrawer);
}

  return (
    <div className={styles.container}>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer 
        goToContact={goToContact}
        closed={sideDrawerClosedHandler} 
        open={showSideDrawer} />
      <div className={styles.header}>
        <h1 id={styles.headerPrompt}>{headerTitle}</h1>
        {headerTitle !== 'Contact' && <select onChange={trailSelect} name='select a trail'>
          <option value='Choose a trail...' label='Compare all trails...' selected='selected'>Compare all trails...</option>
          <option value='Pacific Crest Trail' label='Pacific Crest Trail'>Pacific Crest Trail 👑</option>
          <option value='Appalachian Trail' label='Appalachian Trail'>Appalachian Trail 👑</option>
          <option value='Continental Divide Trail' label='Continental Divide Trail'>
            Continental Divide Trail 👑
          </option>
          <option value='John Muir Trail'>John Muir Trail</option>
        </select>}
      </div>
      {headerTitle == 'Pacific Crest Trail' && <PCT />}
      {headerTitle == 'Appalachian Trail' && <AT />}
      {headerTitle == 'Continental Divide Trail' && <CDT />}
      {headerTitle == 'John Muir Trail' && <JMT />}
      {headerTitle == 'Choose a trail...' && <TripleCrownTable />}
      {headerTitle == 'Choose a trail...' && <TrailTable />}
      {headerTitle == 'Contact' && <Contact />}
    </div>
  );
}

export default MainDashboard;
