import React from "react";
import { ReactComponent as ArrowOpenSvg } from "./ArrowOpen.svg";
import Style from "./Card.module.scss";

export default function MyOfferCard({ imgSrc, product, budget, offer }) {
  return (
    <div className={`${Style.Card} ${Style.ListCard}`}>
      <img className={Style.Image} src={imgSrc} alt={product} />
      <div className={Style.Info}>
        <h3 className={Style.Label}>{product}</h3>
        <p className={Style.Price}>Php {budget}</p>
        <p className={Style.Price}>Offer: Php {offer}</p>
      </div>
      <ArrowOpenSvg className={Style.ArrowOpen} />
    </div>
  );
}
