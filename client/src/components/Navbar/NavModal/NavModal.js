import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import xout from './assets/img/xout.png';
import './NavModal.css';

function NavModal(props) {
  const[drawerClasses, setDrawerClass] = useState('side-drawer');

  useEffect(() => {
    if (props.show) {
      setDrawerClass('side-drawer open')
    } else if (!props.show) {
      setDrawerClass('side-drawer');
    }}
    );

  return (
    <nav className={drawerClasses}>
      <div >
        <a href='/'>
          <img src={xout} id='x-out'></img>
        </a>
      </div>
      <ul>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/'>Bibliography</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavModal;
