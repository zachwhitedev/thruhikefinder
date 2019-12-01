import React, { useState } from 'react';
import './Navbar.css';
import Toolbar from './Toolbar/Toolbar';
import NavModal from './NavModal/NavModal';
import Backdrop from '../Backdrop/Backdrop';

function Navbar(props) {
  const[navModelOpen, toggleNavModal] = useState(false);

  const hamburgerClickHandler = () => {
    toggleNavModal(!navModelOpen);
  }
  const backgroundClickHandler = () => {
    toggleNavModal(false);
  }

  return (
    <div>
      <Toolbar hamburgerClickHandler={hamburgerClickHandler} navModelOpen={navModelOpen}/>
      {navModelOpen && <NavModal show={navModelOpen} click={backgroundClickHandler}/>}      
      {navModelOpen && <Backdrop backgroundClickHandler={backgroundClickHandler}/>}      
    </div>
  );
}

export default Navbar;
