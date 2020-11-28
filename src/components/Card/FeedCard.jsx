import React from "react";
import { ReactComponent as OfferSvg } from "./Offer.svg";
import Style from "./Card.module.scss";

export default function FeedCard({ product, budget, imgSrc }) {
  return (
    <div className={`${Style.Card} ${Style.FeedCard}`}>
      {imgSrc && <img className={Style.Image} src={imgSrc} alt={product} />}
      <div className={Style.Footer}>
        <div className={Style.Info}>
          <h3 className={Style.Label}>{product}</h3>
          <p className={Style.Price}>Budget: Php {budget}</p>
        </div>
        <OfferSvg className={Style.Offer} />
      </div>
    </div>
  );
}
