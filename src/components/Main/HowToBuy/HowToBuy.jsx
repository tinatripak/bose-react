import React from "react";
import classes from "./HowToBuy.module.scss";

const HowToBuy = () => {
  return (
    <div id="how-to-buy" className={classes.how_to_buy}>
      <h2 className={classes.how_to_buy__title}>
        Why buy direct
        <br />
        from Bose
      </h2>

      <div className={classes.how_to_buy__content}>
        <ul className={classes.how_to_buy__advantages}>
          <li>Free 2-day shipping and returns</li>
          <li>90-day risk-free trial</li>
          <li>World className customer service</li>
          <li>My Bose account management</li>
        </ul>

        <p className={classes.how_to_buy__description}>
          A great product is more than what&rsquo;s in the box. It&rsquo;s a
          promise of premium performance, world-className support, and
          everything you expect from a trusted brand. It&rsquo;s just one of
          many reasons why you&rsquo;ll shop with confidence on Bose.com.
        </p>
      </div>
    </div>
  );
};

export default HowToBuy;
