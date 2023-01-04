import React, { Fragment, useEffect } from "react";
import classes from "./CartItems.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  clearProduct,
  removeFromCart,
  storeCartData,
} from "../../store/slices/Cart-slice";
import { Link } from "react-router-dom";


const CartItems = () => {
  
  const cart = useSelector((state) => state.cart);
  const cartProducts = useSelector((state) => state.cart.products);
  const showCartData = cartProducts.length > 0 ? true: false;
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearItem = (id) => {
    dispatch(clearProduct(id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Fragment>
      <div className={`text-center ${classes.info}`}>
        <h2 className="text-uppercase fw-bold">Shopping Cart</h2>
        <div>
          <Link to="/" className={`text-decoration-none ${classes.link}`}>
            home
          </Link>{" "}
          - Shopping Cart
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          {showCartData && (
            <div className="table-responsive col-md-9">
              <table className="table table-bordered text-center align-middle">
                <thead className={`${classes.thead}`}>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody className="">
                  {cartProducts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div
                          className={`d-flex align-items-center justify-content-center ${classes.product}`}
                        >
                          <div className={`${classes.image}`}>
                            <img
                              src={product.images[0]}
                              alt=""
                              className="img-fluid h-100"
                            />
                          </div>
                          <span>{product.title}</span>
                        </div>
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <div
                          className={`${classes.actions} d-flex align-items-center justify-content-center`}
                        >
                          <button
                            className={`btn ${classes.button}`}
                            onClick={() => removeFromCartHandler(product.id)}
                          >
                            -
                          </button>
                          
                          <span className={`text-center ${classes.show}`}>
                            {product.amount}
                          </span>
                          <button
                            className={`btn ${classes.button}`}
                            onClick={() => addToCartHandler(product)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${product.total}</td>
                      <td>
                        <button
                          className={`btn ${classes.button}`}
                          onClick={() => clearItem(product.id)}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="col-md-3">
            <div className={`card rounded-0 mb-3 ${classes.card}`}>
              <div
                className={`card-header border-0 fs-5 fw-bold ${classes["card-header"]}`}
              >
                Cart Summary
              </div>
              <div className="card-body">
                <h5 className="card-title fs-6 fw-bold d-flex justify-content-between">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItems;
