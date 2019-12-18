import React from 'react';
import atmap from '../../../assets/img/atmap.png';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>The Appalachian Trail</div>
        <div className={styles.wrapperInWrapper}>
          <div className={styles.map}>
            <img src={atmap} alt='Appalachian Trail Map'/>
          </div>
          <div>
            <h2 className={styles.fourteenStatesTitle}>The 14 States</h2>
            <table className={styles.moreStatsTable}>
              <th>State</th>
              <th>Distance (mi)</th>
              <th>%</th>
              <tr>
                <td>Georgia</td>
                <td>76.4</td>
                <td>3.5%</td>
              </tr>
              <tr>
                <td>North Carolina</td>
                <td>95.5</td>
                <td>4.4%</td>
              </tr>
              <tr>
                <td>Tennessee</td>
                <td>287.9</td>
                <td>13.2%</td>
              </tr>
              <tr>
                <td>Virginia</td>
                <td>550.3</td>
                <td>25.1%</td>
              </tr>
              <tr>
                <td>West Virginia</td>
                <td>4</td>
                <td>0.2%</td>
              </tr>
              <tr>
                <td>Maryland</td>
                <td>40.9</td>
                <td>1.9%</td>
              </tr>
              <tr>
                <td>Pennsylvania</td>
                <td>229.6</td>
                <td>10.5%</td>
              </tr>
              <tr>
                <td>New Jersey</td>
                <td>72.2</td>
                <td>3.3%</td>
              </tr>
              <tr>
                <td>New York</td>
                <td>88.4</td>
                <td>4.0%</td>
              </tr>
              <tr>
                <td>Connecticut</td>
                <td>51.6</td>
                <td>2.4%</td>
              </tr>
              <tr>
                <td>Massachusetts</td>
                <td>90.2</td>
                <td>4.1%</td>
              </tr>
              <tr>
                <td>Vermont</td>
                <td>150</td>
                <td>6.9%</td>
              </tr>
              <tr>
                <td>New Hampshire</td>
                <td>160.9</td>
                <td>7.4%</td>
              </tr>
              <tr>
                <td>Maine</td>
                <td>281.4</td>
                <td>12.9%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
  );
}