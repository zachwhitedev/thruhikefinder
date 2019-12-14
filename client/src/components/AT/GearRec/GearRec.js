import React from "react";
import styles from "./GearRec.module.css";

export default function GearRec() {
  const jacketimage =
    "https://images-na.ssl-images-amazon.com/images/I/81xJobvlj3L._AC_UX569_.jpg";
  const jacketlink =
    "https://amzn.to/38zN7oQ";

  return (
    <div className={styles.gear}>
      <h2>Gear Recommendation</h2>
      <div className={styles.saleItems}>
        <div className={styles.tentDiv}>
          <div className={styles.gearName}>Rain Jacket: Outdoor Research Helium II</div>
          <a href={jacketlink} target="_blank">
            <img
              id={styles.productImage}
              src={jacketimage}
              alt="rain jacket for hiker"
            />
          </a>

          <a id={styles.jacketButton} href={jacketlink} target="_blank">
            Shop Now
          </a>
        </div>
        <div className={styles.p}>
          <div className={styles.ourReview}>Our Review</div>
          <p>
            As much as I love Frogg Toggs, I absolutely do not recommend them for the Appalachian Trail. That is because of the three triple crown hikes, the AT is by far the wettest. It will probably rain every week. And though Frogg Toggs jackets are great if you only need to break yours out a few times per hike, their downsides are that they rip very easily and they have little to no breathability. There are lots of branches and brush on the AT that will rip Frogg Toggs to shreds before too long, and you will be wearing them so much that you will soon tire of how sweaty you get underneath. That is why I make an exception for the Appalachian Trail, and highly recommend you get a legitimate ultralight rain jacket for your trip.</p>
            <p>The Outdoor Research Helium II is a popular choice, and for good reason: it is among the most ultralight jackets at just 6.4 oz. It is breathable, and it packs down to the size of a sandwich. Unlike similar jackets made by Patagonia and Montbell, you will not go bankrupt buying it - it is cheaper than these brands, and on top of this fact, it is often on sale.
          </p>
        </div>
      </div>
    </div>
  );
}

