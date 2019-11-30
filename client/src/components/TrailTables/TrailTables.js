import React from 'react';
import styles from './TrailTables.module.css';
import AllTrailsTable from './AllTrailsTable/AllTrailsTable';
import TripleCrownTable from './TripleCrownTable/TripleCrownTable';

export default function TrailTables(props){
    return(
        <div>
            <TripleCrownTable />
            <AllTrailsTable />
        </div>
    )
}