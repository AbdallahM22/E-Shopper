import React from "react";
import Heading from "../UI/Heading";
import classes from "./Email.module.css";

const Email = () => {
  return (
    <div className={classes.wrapper}>
      <Heading heading="Stay Updated" />
      <p className={classes.paragraph}>
        Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore
        at justo ipsum eirmod duo labore labore.
      </p>
      <div className={classes.form}>
        <input type="email" placeholder="Email Goes Here"/>
        <input type="submit" placeholder="Subscribe" className={`btn rounded-0`}/>
      </div>
    </div>
  );
};

export default Email;
