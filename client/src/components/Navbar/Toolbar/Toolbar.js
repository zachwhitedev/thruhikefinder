import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import HamburgerButton from '../NavModal/HamburgerButton';

const toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar-navigation'>
      <div className='toolbar-logo'>
        <Link to='/'>THRU HIKE DATA</Link>
      </div>
      <div className='spacer'></div>
      <div className='hamburger-button'>
        <HamburgerButton click={props.hamburgerClickHandler} />
      </div>
      <div className='toolbar-navigation-items'>
        <ul>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          {/* <li>
            <Link to='/'>Newsletter</Link>
          </li> */}
          <li>
            <Link to='/'>Sources</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
