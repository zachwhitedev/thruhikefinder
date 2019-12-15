import React from 'react';
import styles from './BlogMain.module.css';

export default function BlogMain(){
    return(
        <div className={styles.blogcontainer}>
            <p id={styles.blogstyletest}>This is the blog page.</p>
        </div>
    )
}