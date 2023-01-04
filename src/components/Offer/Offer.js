import React from "react";

import offer1 from "../../img/offer-1.png";
import offer2 from "../../img/offer-2.png";
import classes from "./Offer.module.css";

const Offer = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className={`col-md-6 mb-3`}>
          <div className={` ${classes.wrapper}`}>
            <img src={offer1} alt="" className={`${classes.image} ${classes.left}`} />
            <div className={`text-end ${classes.text}`}>
              <p className={`${classes.para}`}>20% OFF THE ALL ORDER</p>
              <h2 className="fs-1 mb-4">Spring Collection</h2>
              <button
                type="button"
                className={`btn rounded-0 border-1 ${classes.button}`}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className={`col-md-6`}>
          <div className={` ${classes.wrapper}`}>
            <div className={`text-start ${classes.text}`}>
              <p className={`${classes.para}`}>20% OFF THE ALL ORDER</p>
              <h2 className="fs-1 mb-4">Winter Collection</h2>
              <button
                type="button"
                className={`btn rounded-0 border-1 ${classes.button}`}
              >
                Shop Now
              </button>
            </div>
            <img src={offer2} alt="" className={`${classes.image} ${classes.right}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
