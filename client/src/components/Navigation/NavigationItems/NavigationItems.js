import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = (props) => (
    <ul className={styles.navigationItems}>
        <div onClick={() => {props.goToContact()}}>
        <NavigationItem active>CONTACT US</NavigationItem>
        </div>
        <NavigationItem link="/">SOURCES / BIBLIOGRAPHY</NavigationItem>
    </ul>
);

export default navigationItems;