import React from 'react'
import styles from './Toolbar.module.css'
// import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <a href='/'>
            <div className={styles.Logo}>
                THRU HIKE DATA
            </div>
        </a>
        <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
)

export default toolbar;