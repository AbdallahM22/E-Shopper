import React from "react";
import Benifit from "./Benifit";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const BENIFITS = [
  {id:1, text: "Quality Product", icon: faCheck},
  {id:2, text: "Free Shipping", icon: faShippingFast },
  {id:3, text: "14-Day Return", icon: faExchange },
  {id:4, text: "24/7 Support" , icon: faPhone},
];

const Benifits = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row my-5">
        {BENIFITS.map((benifit) => (
          <div className="col" key={benifit.id}>
            <Benifit text={benifit.text} icon={benifit.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
