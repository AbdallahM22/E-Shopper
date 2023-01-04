import React, { Fragment } from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className="d-flex align-items-center fw-bold">
      <span className={classes.logo}>E</span>
      <h1 className="my-0 text-black">Shopper</h1>
    </div>
  );
};

export default Logo;
