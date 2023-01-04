import React, { Fragment, useState } from "react";
import classes from "./Search.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [productsFounded, setProductsFounded] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const location = useLocation();
  let showSearch = location.pathname === "/home";
  

  const products = useSelector((state) => state.products.products);
  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const findProducts = (title) => {
    const re = new RegExp(`\\b${title}`, 'i');

    const foundedProducts = products.filter(product => re.test(product.title));
    return foundedProducts;
  };

  
  const hide = () => {
    setProductsFounded([]);
  };

  const searchHandler = () => {
    if(inputValue.trim() === '') {
      return;
    }
    setProductsFounded(findProducts(inputValue));
    setInputValue("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setProductsFounded(findProducts(inputValue));
    setInputValue("");
  };

  return (
    <Fragment>
      {productsFounded.length > 0 && (
        <ProductModal products={productsFounded} hide={hide} />
      )}
      {showSearch && (
        <form
          className={`${classes.form} d-flex align-items-center`}
          onSubmit={submitHandler}
        >
          <div className={classes.input}>
            <input
              type="input"
              placeholder="Search for products"
              onChange={changeHandler}
              value={inputValue}
            />
          </div>
          <div className={classes.icon} onClick={searchHandler}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={classes["search-icon"]}
            />
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default Search;
