import React from "react";
import './Slider.css';
import carousel1 from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.jpg';

const Slider = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={carousel1} className="d-block w-100 h-500" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p>10% OFF YOUR FIRST ORDER</p>
              <h2>
              Fashionable Dress
              </h2>
              <button type="button" className="btn btn-light">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100 h-500" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <p>10% OFF YOUR FIRST ORDER</p>
              <h2>
              Reasonable Price
              </h2>
              <button type="button" className="btn btn-light">Shop Now</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
