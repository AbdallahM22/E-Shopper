import React from 'react';
import cat1 from '../../img/cat-1.jpg';
import cat2 from '../../img/cat-2.jpg';
import cat3 from '../../img/cat-3.jpg';
import cat4 from '../../img/cat-4.jpg';
import cat5 from '../../img/cat-5.jpg';
import cat6 from '../../img/cat-6.jpg';

import Category from './Category';

const CATEGORIES = [
    {id: 1, count:10, img: cat1, cat: `Men's dresses`},
    {id: 2, count:12, img: cat2, cat: `Women's dresses`},
    {id: 3, count:13, img: cat3, cat: `Baby's dresses`},
    {id: 4, count:15, img: cat4, cat: `Accerssories`},
    {id: 5, count:15, img: cat5, cat: `Bags`},
    {id: 6, count:14, img: cat6, cat: `Shoes`},
];

const Categories = () => {
  return (
    <div className='container-fluid'>
      <div className='row' >
        {CATEGORIES.map((category)=> <div className='col-12 col-md-6 col-lg-4' key={category.id}>
            <Category count={category.count} img={category.img} cat={category.cat}/>
        </div>)}
      </div>
    </div>
  )
}

export default Categories;
