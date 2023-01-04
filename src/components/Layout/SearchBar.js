import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";
import Logo from "../UI/Logo";
import Search from "../UI/Search";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className="container-fluid">
      <div className={`${classes.c} row align-items-center justify-content-between py-2`}>
        <Link to='/home' className="d-none col-4 d-lg-block text-decoration-none">
          <Logo />
        </Link>
        <div className="col-6 justify-content-lg-center"><Search /></div>
        <div className="col-6 col-lg-2 d-flex justify-content-end"><CartButton /></div>
      </div>
    </div>
  );
};

export default SearchBar;
