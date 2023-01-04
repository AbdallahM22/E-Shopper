import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import classes from "./ProductDetail.module.css";



const ProductDetail = () => {
  const [product, setProduct] = useState("");
  const params = useParams();
  const productId = params.productId;

  const fetchProduct = useCallback(async () => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    await response.json().then((res) => setProduct(res));
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className="container-fluid">
      <div className={classes.product}>
        {product !== "" && (
          <Product product={product} hideDetail={true}></Product>
        )}
      </div>
    </div>
  );
};
//
export default ProductDetail;
