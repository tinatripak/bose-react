import React from "react";
import classes from "./Categories.module.scss";

const Categories = () => {
  return (
    <div id="categories" className={classes.categories}>
      <h2 className={classes.categories__title}>
        Browse Bose
        <br />
        products by category
      </h2>

      <article className={classes.category}>
        <div className={classes.category__photos}>
          <img
            src="../../../images/products/headphones/earbuds.png"
            className={classes.category__photos__photo__wide}
            alt="Earbuds"
          />
          <img
            src="../../../images/products/headphones/headphones.png"
            className={classes.category__photos__photo__square}
            alt="Headphones"
          />
        </div>
        <h3 className={classes.category__title}>Headphones & earbuds</h3>
      </article>

      <article className={classes.category}>
        <div className={classes.category__photos}>
          <img
            src="../../../images/products/speakers/speaker-wide.png"
            className={classes.category__photos__photo__wide}
            alt="Wide speaker"
          />
          <img
            src="../../../images/products/speakers/speaker-square.png"
            className={classes.category__photos__photo__square}
            alt="Square speaker"
          />
        </div>
        <h3 className={classes.category__title}>Speakers</h3>
      </article>

      <article className={classes.category}>
        <div className={classes.category__photos}>
          <img
            src="../../../images/products/sunglasses/man-sunglasses.png"
            className={classes.category__photos__photo__square}
            alt="Man sunglasses"
          />
          <img
            src="../../../images/products/sunglasses/woman-sunglasses.png"
            className={classes.category__photos__photo__wide}
            alt="Woman sunglasses"
          />
        </div>
        <h3 className={classes.category__title}>Audio sunglasses</h3>
      </article>
    </div>
  );
};

export default Categories;
