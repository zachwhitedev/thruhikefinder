import React from 'react';
import styles from './BlogMain.module.css';
import PostPreview from './posts/PostPreview';

const postPreviewsInfo = [
  {
    title: 'Murders of the Appalachian Trail',
    author: 'Peter White',
    date: 'Dec 14th, 2019',
    description: 'This is an example of a description for this blog post.',
    image: 'lion.png',
    route: '/blog/at-murders'
  }
];

export default function BlogMain() {
  return (
    <div className={styles.blogcontainer}>
      <div className={styles.previewColumn}>
      {postPreviewsInfo.map(preview =>
          <PostPreview
            title={preview.title}
            author={preview.author}
            date={preview.date}
            description={preview.description}
            image={preview.image}
            route={preview.route}
          />
        )}
      </div>
      <div className={styles.rightColumn}>Blog</div>
    </div>
  );
}
