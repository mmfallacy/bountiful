import React from "react";
import { ReactComponent as OfferSvg } from "./Offer.svg";
import Style from "./Card.module.scss";

import {useHistory} from "react-router-dom"

export default function FeedCard({ productId, product, budget, imgSrc }) {

  const history = useHistory()
  return (
    <div className={`${Style.Card} ${Style.FeedCard}`}>
      {imgSrc && <img className={Style.Image} src={imgSrc} alt={product} />}
      <div className={Style.Footer}>
        <div className={Style.Info}>
          <h3 className={Style.Label}>{product}</h3>
          <p className={Style.Price}>Budget: Php {budget}</p>
        </div>
        <button className={Style.Offer} onClick={()=> history.push(`/listing/${productId}/newoffer`)}>
        <OfferSvg className={Style.OfferIcon} />
        </button>
      </div>
    </div>
  );
}
