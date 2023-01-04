import React from "react";
import { useSelector } from 'react-redux';
import classes from "./CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartButton = () => {
  const cartAmount = useSelector(state=> state.cart.totalAmount);

  return (
    <div className="d-flex align-items-center">
      <Link to="/cart" className={classes['icon-container']}>
        <FontAwesomeIcon icon={faCartShopping} className={classes.icon}/>
        <span>{cartAmount}</span>
      </Link>
    </div>
  );
};

export default CartButton;
