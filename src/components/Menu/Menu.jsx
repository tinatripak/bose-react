import React, { useEffect } from "react";
import classes from "./Menu.module.scss";
import $ from "jquery";

const Menu = () => {
  useEffect(() => {
    $(".nav a").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
    });
  });
  return (
    <div className={classes.menu} id="menu">
      <div className={classes.menu__top}>
        <img src="../../images/logo.png" alt="Bose logo" />
        <a href="#home">
          <img src="../../images/icons/icon-close.png" alt="Close" />
        </a>
      </div>

      <nav className={classes.nav}>
        <a href="#home" className={classes.nav__link}>
          {" "}
          Home{" "}
        </a>
        <a href="#recommended" className={classes.nav__link}>
          Recommended
        </a>
        <a href="#categories" className={classes.nav__link}>
          Categories
        </a>
        <a href="#how-to-buy" className={classes.nav__link}>
          How to buy
        </a>
      </nav>
    </div>
  );
};

export default Menu;
