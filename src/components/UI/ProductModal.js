import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import classes from './ProductModal.module.css';

const Backdrop = (props)=> {

  return (
    <div className={`${classes.backdrop} `} onClick={props.hide} />
  );
}

const ProductsOverlay = (props)=> {
  return (
    <div className={classes.productsOverlay} onClick={props.hide}>
      {console.log(props.products)}
      {props.products.map((product)=> <Link className={classes.link} to={`/products/${product.id}`} key={product.id}><h3>{product.title}</h3></Link>)}
    </div>
  );
}
const ProductModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hide={props.hide}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ProductsOverlay products={props.products} hide={props.hide}/>, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default ProductModal;
