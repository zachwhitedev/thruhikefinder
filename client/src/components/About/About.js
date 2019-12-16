import React, { useState } from 'react';
import styles from './About.module.css';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <div id={styles.aboutPageWrapper}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Contact</title>
        <meta name='description' content='Thru Hike Data - About'></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/about' />
      </Helmet>
      <div className={styles.aboutSection}>
        <p><b>Thru Hike Data</b> is a website by hikers, for hikers, for displaying and sharing the latest and best information about long distance hiking trails in the United States.</p>
        <p id={styles.amazonDisclaimer}>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.</p>
      </div>
    </div>
  );
}
