import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link onClick={props.click} to={props.beingViewed}>
          <img src={xout} id='x-out'></img>
        </Link>
      </div>
      <ul>
        <li>
          <Link onClick={props.click} to='/blog'>Blog</Link>
        </li>
        <li>
          <Link onClick={props.click} to='/'>Sources</Link>
        </li>
        <li>
          <Link onClick={props.click} to='/about'>About</Link>
        </li>
        <li>
          <Link onClick={props.click} to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavModal;
