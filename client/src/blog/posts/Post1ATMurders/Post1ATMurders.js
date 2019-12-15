import React from 'react';
import styles from './Post1ATMurders.module.css';

export default function Post1ATMurders() {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postContent}>
        <h1 className={styles.postTitle}>Murders of the Appalachian Trail</h1>  
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
