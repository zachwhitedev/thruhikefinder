import React from 'react';
import styles from './Post1.module.css';

export default function Post1(){
    return(
        <div className={styles.blogcontainer}>
            <p id={styles.blogstyletest}>This is the blog page.</p>
        </div>
    )
}