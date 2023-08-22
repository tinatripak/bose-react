import React from "react";
import Categories from "./Categories/Categories";
import Recommended from "./Recommended/Recommended";
import HowToBuy from "./HowToBuy/HowToBuy";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <main className={classes.main}>
      <Recommended />
      <Categories />
      <HowToBuy />
    </main>
  );
};

export default Main;
