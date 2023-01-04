import React from 'react'
import classes from './Category.module.css';


const Category = ({count, img, cat}) => {
  return (
    <div className={classes.wrapper}>  
        <p className='text-end'>{count} Products</p>
        <a href='/#' className='d-block position-relative overflow-hidden text-center mb-3'>
            <img src={img} alt='' className={'img-fluid'}/>
        </a>
        <h5>{cat}</h5>
    </div>
  )
}

export default Category;
