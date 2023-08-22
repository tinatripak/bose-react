import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__top}>
        <img src="../../images/logo.png" alt="Bose logo" />
        <a href="#menu">
          <img
            src="../../images/icons/icon-burger-menu.png"
            alt="Burger menu"
          />
        </a>
      </div>

      <div className={classes.header__bottom}>
        <img src="../../images/sound-waves.png" alt="Sound waves" />
        <h1 className={classes.header__title}>
          The world shades.
          <br />
          Your music shines.
        </h1>
      </div>
    </header>
  );
};

export default Header;
