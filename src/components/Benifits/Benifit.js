import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Benifit.module.css';

const Benifit = ({ text, icon }) => {
  return (
    <div className={`${classes.box} d-flex align-items-center`}>
      <FontAwesomeIcon icon={icon} className={classes.icon}/>
      <h5 className="mb-0">{text}</h5>
    </div>
  );
};

export default Benifit;
