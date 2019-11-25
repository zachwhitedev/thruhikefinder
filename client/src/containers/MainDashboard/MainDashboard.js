import React, { useState, useEffect, useCallback } from 'react';
import styles from './MainDashboard.module.css';
import TrailTable from '../../components/TrailTable/TrailTable';
import PCT from '../../components/PCT/PCT';
import AT from '../../components/AT/AT';
import TripleCrownTable from '../../components/TripleCrownTable/TripleCrownTable';

function MainDashboard(props) {
  const [headerTitle, setHeaderTitle] = useState('Choose a trail...');

  const trailSelect = e => {
    setHeaderTitle(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Header shit goes here. Maybe nav bar.
        <h1>{headerTitle}</h1>
        <select onChange={trailSelect}>
          <option value='Choose a trail...' selected='selected'>Select a trail</option>
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
