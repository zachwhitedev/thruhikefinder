import React from 'react';
import styles from './TrailTables.module.css';
import { Helmet } from 'react-helmet';
import AllTrailsTable from './AllTrailsTable/AllTrailsTable';
import TripleCrownTable from './TripleCrownTable/TripleCrownTable';

export default function TrailTables(props) {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Thru Hike Data Tables</title>
        <meta
          name='description'
          content='A web page displaying data on all major thru hikes in the United States.'
        ></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/' />
      </Helmet>
      <TripleCrownTable />
      <AllTrailsTable />
    </div>
  );
}
