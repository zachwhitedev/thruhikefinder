import React from 'react';
import styles from './NoboSobo.module.css';

export default function NoboSobo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.tableTitle}>Northbound vs. Southbound</h2>
      <table className={styles.noboSoboTable}>
        <th></th>
        <th>NOBO</th>
        <th>SOBO</th>
        <tr>
          <td>PERMIT</td>
          <td>Harder to get permit.</td>
          <td>Easier to get permit.</td>
        </tr>
        <tr>
          <td>SOCIAL</td>
          <td>Hike is very social, arguably getting crowded, but fun if you are a social person and thrive in groups.</td>
          <td>Hike is less social as you will see less people, but by no means is it isolated - the southbound hike is getting more popular, and you will still see other hikers most days.</td>
        </tr>
        <tr>
          <td>TIMETABLE</td>
          <td><p>After completing the desert section in the spring, many northbounders find themselves waiting around for the snow in the Sierra to melt, before entering them some time in June. Though the more adventurous might press on into the snow anyway, many will take 1-3 weeks off from the trail or “flip up” to complete sections of the trail north of the Sierra (often choosing lower elevation trail in Oregon) while they wait for better conditions.</p>
          <p>The Cascades in Northern Washington can receive hike-ending levels of snowfall as early as mid-September, so most aim to reach the Northern Terminus by October 1st.</p></td>
          <td><p>There is something of a time crunch to get through the Sierra Nevada before mid-October - the standard “deadline” most give themselves to beat the snow (though nature is fickle and the snow can arrive both sooner and much later, depending on the year). Even if you start your hike in late June, you cannot waste too much time if you are serious about hiking the entire trail in one go.</p>
          <p>However, once you reach South Kennedy Meadows, you can relax knowing that you can go as slow as you want for the final 700 miles of the trail (the desert section is hikable throughout the fall/winter months).</p></td>
        </tr>
        <tr>
          <td>RESUPPLIES</td>
          <td>More resupply options in the Sierra Nevada.</td>
          <td>Less resupply options in the Sierra, as some places close for the season. For example, the Tuolmne Meadows campground in Yosemite NP will be closed if you do not get there by the last few days of September.</td>
        </tr>
        <tr>
          <td>FIRST MILES</td>
          <td>The desert section in SoCal, being relatively flat, is a great “warm up” for northbounders.</td>
          <td>Starting in northern Washington, you are thrown right into one of the most rugged and remote sections of the trail.</td>
        </tr>
        <tr>
          <td>DESERT TEMPS</td>
          <td>Desert temperatures will be hotter - but Nobos get to see the spring desert flower bloom.</td>
          <td>Desert temperatures are cooler, but no pretty flowers.</td>
        </tr>
        <tr>
          <td>SNOW</td>
          <td>Regardless of how late in June you enter the Sierra, there will likely be snow waiting for you atop the higher passes. Plan accordingly.</td>
          <td>Starting in Northern Washington in late-June or July means southbounders get their own stretch of snow, right at the start. An ice axe and spikes in the Cascades can be necessities, depending on the snowpack level. Post-holing and long sections of wet trail are common occurrences.</td>
        </tr>
        <tr>
          <td>SIERRA</td>
          <td>In addition to the snow on the ground, the spring snowmelt in the Sierra Nevada translates to mosquitoes and perilous river crossings during this large section of California trail - you will also be sharing the trail with many day-hikers during peak tourist season.</td>
          <td>For Sobos in the Sierra, there are no perilous river crossings and virtually no bugs during this large section of the trail. In the fall, the Sierra will be much less crowded as well.</td>
        </tr>
        <tr>
          <td>BITING BUGS</td>
          <td>Nobos have it worse, as they essentially follow the hatching season. There are few bugs in the desert, but once they enter the Sierra, they get no relief until they reach Washington.</td>
          <td>Sobos walk against the hatching season. Though the bugs can get bad in southern Washington and northern Oregon, once they cross into California, they might never feel another bite.</td>
        </tr>
        <tr>
          <td>Northern Terminus</td>
          <td>Northbound hikers do not have to do an “out and back” to touch the Northern Terminus, they simply hike straight to it. However, in order to enter Canada after reaching the Northern Terminus, you must obtain a <a href="https://www.pcta.org/discover-the-trail/permits/canada-pct-entry-permit/" target="_blank">PCT Canada Entry Permit.</a></td>
          <td>Southbounders must begin their hike within the United States, as it is illegal to enter the United States from Manning Park, Canada. For this reason, most choose to begin their hike at Hart’s Pass, which is on the PCT and roughly 30 miles south of the Northern Terminus. They must hike the 30 miles to the Northern Terminus, then turnaround and hike the 30 miles back (there are no roads to hitch back, as it is too remote/mountainous).</td>
        </tr>
        <tr>
          <td>Trail Magic</td>
          <td>Lots of trail magic.</td>
          <td>Far less trail magic.</td>
        </tr>
      </table>
    </div>
  );
}
