import React, { useState, useEffect } from 'react';
import './HamburgerButton.css';


function HamburgerButton(props){
    const[hamburgerClass, setHamburgerClass] = useState('toggle-button');

    useEffect(() => {
        if(props.navModalOpen){
            setHamburgerClass('toggle-button hide')
        }
        else{
            setHamburgerClass('toggle-button')
        }
    })
    
    return (
    <button className={hamburgerClass} onClick={props.click}>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
        <div className='toggle-button-line'></div>
    </button>
    )
}


export default HamburgerButton;