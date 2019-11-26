import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={styles.navigationItems}>
        <NavigationItem link="/" active>CONTACT US</NavigationItem>
        <NavigationItem link="/">SOURCES / BIBLIOGRAPHY</NavigationItem>
    </ul>
);

export default navigationItems;