import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css';
import Backdrop from '../UI/Backdrop/Backdrop';
//import Aux from '../../../hoc/Aux/Aux'

const sideDrawer = (props) => {
    
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return(
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    THRU HIKE DATA
                </div>
                
                <nav>
                    <NavigationItems goToContact={props.goToContact} />
                </nav>
            </div>
        </div>
    );
};

export default sideDrawer;

// might ned to change div's to <Aux>