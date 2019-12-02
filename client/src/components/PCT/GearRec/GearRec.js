import React from "react";
import styles from "./GearRec.module.css";

export default function GearRec() {
  const tentimage =
    "https://images-na.ssl-images-amazon.com/images/I/41fc3313RVL._SL250_.jpg";
  const tentlink =
    "https://www.amazon.com/gp/product/B07MTSM7ZL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07MTSM7ZL&linkCode=as2&tag=nelsonshepher-20&linkId=8476d7d82c5b613b58dc9ccc9c47cde1";

  return (
    <div className={styles.gear}>
      <h2>Our Gear Recommendation</h2>
      <div className={styles.saleItems}>
        <div className={styles.tentDiv}>
          <h3>The Nemo Hornet</h3>
          <a href={tentlink} target="_blank">
            <img
              id={styles.productImage}
              src={tentimage}
              alt="tent for hiker"
            />
          </a>

          <a id={styles.tentButton} href={tentlink} target="_blank">
            Shop Now
          </a>
        </div>
        <div className={styles.p}>
          <p>
            This is truly a “tent for all seasons" - cheaper than the super
            expensive cottage brands, but still ultralight at just 1 lb 10 oz.
          </p>
          <p>
            Extremely durable, reliable, and quick to set up - clutch for when
            you’re exhausted and just want to dive into your sleeping bag.
          </p>
          <p>
            Other ultralight tents from companies like Zpacks (and others that
            use DCF as their fabric) trap condensation and drip water on you
            while you sleep - this one won’t.
          </p>
          <p>
            The PCT has a wide variety of campsites, from the outskirts of the
            Mojave Desert to the High Sierra - with this tent in your pack you
            are always prepared.
          </p>
          <p>We recommend the 2 person version for those on the taller side.</p>
        </div>
      </div>
    </div>
  );
}
