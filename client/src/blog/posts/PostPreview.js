import React from 'react';
import styles from './PostPreview.module.css';

export default function PostPreview(props) {
  return (
    <div className={styles.postblock}>
      <div>
      <img src={require(`../blog-assets/img/${props.image}`)} />
      </div>
      <div className={styles.previewWords}>
        <h2 className={styles.postpreviewtitle}>
          {props.title}
        </h2>
        <p className={styles.postpreviewdescription}>
          {props.description}
        </p>
        <div className={styles.authorplusdate}>
            <h5>{props.author}</h5>
            <h5 id={styles.previewDate}>{props.date}</h5>
        </div>
      </div>
    </div>
  );
}
