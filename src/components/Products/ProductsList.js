import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';

import Heading from '../UI/Heading';
import { fetchProducts } from '../../store/slices/Products-slice';


const Products = () => {
  const products = useSelector(state => state.products.products);
  

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchProducts());
  }, [dispatch]);
 
  return (
    <div className='container-fluid'>
        <Heading heading="Trandy Products"/>
      <div className='row'>
        {products.map((product)=> <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={product.id}>
          <Product product={product}/>
        </div>)}
      </div>
    </div>
  )
}

export default Products;
