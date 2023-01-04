import React from 'react'
import classes from './Heading.module.css';
const Heading = ({heading}) => {
  return (
    <h2 className={classes.heading}><span>{heading}</span></h2>
  )
}

export default Heading;
