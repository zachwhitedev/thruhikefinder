import React from 'react';
import styles from './Post1ATMurders.module.css';
import { Helmet } from 'react-helmet';

export default function Post1ATghosts() {
  return (
    <div className={styles.postContainer}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Ghosts of the Appalachian Trail</title>
        <meta
          name='description'
          content='An article discussing the history of murder that haunts the Appalachian trail.'
        ></meta>
        <link
          rel='canonical'
          href='https://www.thruhikedata.com/blog/at-ghosts'
        />
      </Helmet>
      <div className={styles.postContent}>
        <h1 className={styles.postTitle}>Ghosts of the Appalachian Trail</h1>
        <p>This article is coming soon! Enjoy the random text below.</p>
        <p>
          There are five known copies of the speech in Lincoln's handwriting,
          each with a slightly different text, and named for the people who
          first received them: Nicolay, Hay, Everett, Bancroft and Bliss. Two
          copies apparently were written before delivering the speech, one of
          which probably was the reading copy. The remaining ones were produced
          months later for soldier benefit events. Despite widely-circulated
          stories to the contrary, the president did not dash off a copy aboard
          a train to Gettysburg. Lincoln carefully prepared his major speeches
          in advance; his steady, even script in every manuscript is consistent
          with a firm writing surface, not the notoriously bumpy Civil War-era
          trains. Additional versions of the speech appeared in newspapers of
          the era, feeding modern-day confusion about the authoritative text.
        </p>
        <p>
          There are five known copies of the speech in Lincoln's handwriting,
          each with a slightly different text, and named for the people who
          first received them: Nicolay, Hay, Everett, Bancroft and Bliss. Two
          copies apparently were written before delivering the speech, one of
          which probably was the reading copy. The remaining ones were produced
          months later for soldier benefit events. Despite widely-circulated
          stories to the contrary, the president did not dash off a copy aboard
          a train to Gettysburg. Lincoln carefully prepared his major speeches
          in advance; his steady, even script in every manuscript is consistent
          with a firm writing surface, not the notoriously bumpy Civil War-era
          trains. Additional versions of the speech appeared in newspapers of
          the era, feeding modern-day confusion about the authoritative text.
        </p>
      </div>
    </div>
  );
}
