import React from 'react';
import styles from './BlogMain.module.css';
import PostPreview from './posts/PostPreview';
import { Helmet } from 'react-helmet';

const postPreviewsInfo = [
  {
    title: 'Ghosts of the Appalachian Trail',
    author: 'Peter Roland',
    date: 'Dec 14th, 2019',
    description: 'This is an example of a description for this blog post.',
    image: 'lion.png',
    route: '/blog/at-ghosts'
  }
];

export default function BlogMain() {
  return (
    <div className={styles.blogcontainer}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Thru Hike Data - Blog</title>
        <meta
          name='description'
          content='Articles about thru-hikes in the United States.'
        ></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/blog' />
      </Helmet>
      <div className={styles.previewColumn}>
        {postPreviewsInfo.map(preview => (
          <PostPreview
            title={preview.title}
            author={preview.author}
            date={preview.date}
            description={preview.description}
            image={preview.image}
            route={preview.route}
          />
        ))}
      </div>
      <div className={styles.rightColumn}>Blog</div>
    </div>
  );
}
