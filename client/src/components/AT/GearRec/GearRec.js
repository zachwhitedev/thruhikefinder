import React from "react";
import styles from "./GearRec.module.css";

export default function GearRec() {
  const tentimage =
    "https://images-na.ssl-images-amazon.com/images/I/41fc3313RVL._SL250_.jpg";
  const tentlink =
    "https://www.amazon.com/gp/product/B07MTSM7ZL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07MTSM7ZL&linkCode=as2&tag=nelsonshepher-20&linkId=8476d7d82c5b613b58dc9ccc9c47cde1";

  return (
    <div className={styles.gear}>
      <h2>Gear Recommendation</h2>
      <div className={styles.saleItems}>
        <div className={styles.tentDiv}>
          <div className={styles.gearName}>Rain Jacket: Outdoor Research Helium II</div>
          <a href={tentlink} target="_blank">
            <img
              id={styles.productImage}
              src={tentimage}
              alt="rain jacket for hiker"
            />
          </a>

          <a id={styles.tentButton} href={tentlink} target="_blank">
            Shop Now
          </a>
        </div>
        <div className={styles.p}>
          <div className={styles.ourReview}>Our Review</div>
          <p>
            As much as I love the Frogg Toggs rain jacket, I do not recommend one for the Appalachian Trail. Of the three triple crown hikes, the AT is by far the wettest. It will probably rain every week. Though Frogg Toggs jackets are great if you only need to break yours out a few times per hike (ex. PCT), the downsides are that they rip easily and have little to no breathability.</p> 
            <p>There are lots of branches and brush on the AT that will rip Frogg Toggs to shreds before too long, and you will be wearing them so much that you will soon tire of how sweaty you get underneath. So, this is why I make an exception for the Appalachian Trail and recommend you get a legitimate ultralight rain jacket for it.</p>
            <p>The Outdoor Research Helium II is a popular choice, and for good reason: it is among the most ultralight jackets at just 6.4 oz. It breathes well and packs down to the size of a sandwich. For those on a budget, it is also cheaper than more expensive brands like Montbell and Patagonia which charge a brand premium for essentially the same product - just our opinion.
          </p>
        </div>
      </div>
    </div>
  );
}

