import React from "react";
import styles from "./ExtraCard.module.css";

export default function ExtraCard() {
  return (
    <div>
      <h2>The 14 States</h2>
      <table className={styles.moreStatsTable}>
        <th>State</th>
        <th>Distance (mi)</th>
        <th>%</th>
        <th>Highlight</th>
        <tr>
          <td>Georgia</td>
          <td>76.4</td>
          <td>3.5%</td>
          <td>Blood Mountain</td>
        </tr>
        <tr>
          <td>North Carolina</td>
          <td>95.5</td>
          <td>4.4%</td>
          <td>Fontana Dam Shelter</td>
        </tr>
        <tr>
          <td>Tennessee</td>
          <td>287.9</td>
          <td>13.2%</td>
          <td>Clingman's Dome</td>
        </tr>
        <tr>
          <td>Virginia</td>
          <td>550.3</td>
          <td>25.1%</td>
          <td>Shenandoah NP</td>
        </tr>
        <tr>
          <td>West Virginia</td>
          <td>4</td>
          <td>0.2%</td>
          <td>Harper's Ferry, WV</td>
        </tr>
        <tr>
          <td>Maryland</td>
          <td>40.9</td>
          <td>1.9%</td>
          <td>South Mountain</td>
        </tr>
        <tr>
          <td>Pennsylvania</td>
          <td>229.6</td>
          <td>10.5%</td>
          <td>St. Anthony's Wilderness</td>
        </tr>
        <tr>
          <td>New Jersey</td>
          <td>72.2</td>
          <td>3.3%</td>
          <td>Black bears</td>
        </tr>
        <tr>
          <td>New York</td>
          <td>88.4</td>
          <td>4.0%</td>
          <td>Bear Mtn. State Park</td>
        </tr>
        <tr>
          <td>Connecticut</td>
          <td>51.6</td>
          <td>2.4%</td>
          <td>Bear Mountain Summit</td>
        </tr>
        <tr>
          <td>Massachusetts</td>
          <td>90.2</td>
          <td>4.1%</td>
          <td>Mount Greylock</td>
        </tr>
        <tr>
          <td>Vermont</td>
          <td>150</td>
          <td>6.9%</td>
          <td>The Green Mountains</td>
        </tr>
        <tr>
          <td>New Hampshire</td>
          <td>160.9</td>
          <td>7.4%</td>
          <td>The White Mountains</td>
        </tr>
        <tr>
          <td>Maine</td>
          <td>281.4</td>
          <td>12.9%</td>
          <td>Mount Katahdin</td>
        </tr>
      </table>
    </div>
  );
}
