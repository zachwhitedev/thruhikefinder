import React from 'react';
import styles from './PostPreview.module.css';
import { Link, useHistory } from 'react-router-dom';

export default function PostPreview(props) {
  let history = useHistory();

  const handlePreviewClick = () => {
    history.push(props.route);
  };

  return (
    <div className={styles.postblock}>
      <div onClick={handlePreviewClick} className={styles.imgDiv}>
        <img src={require(`../blog-assets/img/${props.image}`)} />
      </div>
      <div className={styles.previewWords}>
        <h2 className={styles.postpreviewtitle}>
          <Link to={props.route} className={styles.routerLink}>
            {props.title}
          </Link>
        </h2>
        <p className={styles.postpreviewdescription}>{props.description}</p>
        <div className={styles.authorplusdate}>
          <h5>{props.author}</h5>
          <h5 id={styles.previewDate}>{props.date}</h5>
        </div>
      </div>
    </div>
  );
}
