import React from "react";
import {
  BathroomIcon,
  BedroomIcon,
  CartIcon,
  ChartIcon,
  CircleArrowIcon,
  NetIcon,
  ScaleIcon,
} from "../../img/icons";
import "./cartPortfolio.scss";

function CartPortfolio({
  idx,
  img,
  heading,
  offer,
  bed,
  barth,
  park,
  area,
  since,
  potential,
  net,
}) {
  return (
    <div className="cartPort">
      {idx == 0 && <p className="top-perf">top performer</p>}

      <div className="img-cartPort">
        <img src={img} alt="" />
      </div>
      <div className="port-content">
        <div className="port-content-title">
          <p className="heading-port">{heading}</p>
          <CircleArrowIcon />
        </div>
        <p className="port-content-money">Offer from : $ {offer}</p>
        <div className="port-content-desc">
          <div className="dest-info">
            <BedroomIcon /> <span>{bed}</span>&nbsp;beds
          </div>
          <div className="dest-info">
            <BathroomIcon /> <span>{barth}</span>&nbsp;barth
          </div>
          <div className="dest-info">
            <CartIcon /> <span>{park}</span>&nbsp;park
          </div>
          <div className="dest-info">
            <ScaleIcon /> <span>{area}</span>&nbsp;m2
          </div>
        </div>
        <p className="content-owner">
          <span>Owned since:</span> {since}
        </p>
      </div>
      <div className="port-label">
        <div className="port-label-inside">
          <div className="label-heading">
            <ChartIcon /> Potential equity
          </div>
          <p className="label-title">${potential}</p>
        </div>
        <div className="port-label-inside">
          <div className="label-heading">
            <NetIcon /> Net Yield
          </div>
          <p className="label-title">${net}</p>
        </div>
      </div>
    </div>
  );
}

export default CartPortfolio;
