import React, { useState, useEffect, useCallback } from 'react';
import styles from './MainDashboard.module.css';
import TrailTable from '../../components/TrailTable/TrailTable';
import PCT from '../../components/PCT/PCT';
import AT from '../../components/AT/AT';
import TripleCrownTable from '../../components/TripleCrownTable/TripleCrownTable';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

function MainDashboard(props) {
  const [headerTitle, setHeaderTitle] = useState('Choose a trail...');
  const [showSideDrawer, sideDrawer] = useState(false);

  const trailSelect = e => {
    setHeaderTitle(e.target.value);
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
        closed={sideDrawerClosedHandler} 
        open={showSideDrawer} />
      <div className={styles.header}>
        <h1 id={styles.headerPrompt}>{headerTitle}</h1>
        <select onChange={trailSelect}>
          <option value='Choose a trail...' selected='selected'>Compare all trails...</option>
          <option value='Pacific Crest Trail'>Pacific Crest Trail 👑</option>
          <option value='Appalachian Trail'>Appalachian Trail 👑</option>
          <option value='Continental Divide Trail'>
            Continental Divide Trail 👑
          </option>
          <option value='John Muir Trail'>John Muir Trail</option>
        </select>
      </div>
      {headerTitle == 'Pacific Crest Trail' && <PCT />}
      {headerTitle == 'Appalachian Trail' && <AT />}
      {headerTitle == 'Choose a trail...' && <TripleCrownTable />}
      {headerTitle == 'Choose a trail...' && <TrailTable />}
    </div>
  );
}

export default MainDashboard;
