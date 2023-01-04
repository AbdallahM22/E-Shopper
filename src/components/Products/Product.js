import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/Cart-slice";
import { Link } from "react-router-dom";

const Product = (props) => {
  const product = props.product;
  const hideDetail = props.hideDetail;
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={`card mb-4 text-center ${classes.card}`}>
      <div className={classes.image}>
        <img src={product.images[0]} className="card-img-top h-100" alt="..." />
      </div>
      <div className={`card-body ${classes.body}`}>
        <div className={`${classes.text}`}>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
        </div>
        <div className={`d-flex justify-content-between ${classes.actions}`}>
          {!hideDetail && (
            <Link
              to={`/products/${product.id}`}
              className={`btn ${classes.button}`}
            >
              <FontAwesomeIcon icon={faEye} className={classes.icon} />
              View Detail
            </Link>
          )}
          <button
            href="/#"
            className={`btn ${classes.button} ${hideDetail ? "m-auto" : ""}`}
            onClick={() => addToCartHandler(product)}
          >
            <FontAwesomeIcon icon={faCartShopping} className={classes.icon} />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
