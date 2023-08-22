import React from "react";
import classes from "./Recommended.module.scss";

const Recommended = () => {
  return (
    <div id="recommended" className={classes.recommended}>
      <h2 className={classes.recommended__title}>Recommended</h2>

      <div className={classes.recommended__products}>
        <article className={classes.product}>
          <img
            src="../../../images/recommended/portable-smart-speaker.png"
            className={classes.product__photo}
            alt="Portable smart speaker"
          />
          <h3 className={classes.product__title}>
            Bose portable Smart speaker
          </h3>
          <p className={classes.product__category}>Smart home</p>
          <p className={classes.product__price}>$ 399.00</p>
        </article>

        <article className={classes.product}>
          <img
            src="../../../images/recommended/flex-bluetooth-speaker.png"
            className={classes.product__photo}
            alt="SoundLink flex Bluetooth speaker"
          />
          <h3 className={classes.product__title}>
            SoundLink Flex Bluetooth speaker
          </h3>
          <p className={classes.product__category}>Portable bluetooth</p>
          <p className={classes.product__price}>$ 149.00</p>
        </article>

        <article className={classes.product}>
          <img
            src="../../../images/recommended/color-bluetooth-speaker.png"
            className={classes.product__photo}
            alt="SoundLink color Bluetooth speaker II"
          />
          <h3 className={classes.product__title}>
            SoundLink Color Bluetooth speaker II
          </h3>
          <p className={classes.product__category}>Portable bluetooth</p>
          <p className={classes.product__price}>$ 129.00</p>
        </article>
      </div>
    </div>
  );
};

export default Recommended;
