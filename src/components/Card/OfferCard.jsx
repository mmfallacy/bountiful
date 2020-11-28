import React from "react";
import { ReactComponent as ArrowOpenSvg } from "./ArrowOpen.svg";
import Reputation from "../Reputation/Reputation";
import Style from "./Card.module.scss";

export default function OfferCard({ imgSrc, seller: { pfp, name, reputation }, offer, product }) {
  return (
    <div className={`${Style.Card} ${Style.ListCard}`}>
      <img className={Style.Image} src={imgSrc} alt={product} />
      <div className={Style.Info}>
        <h3 className={Style.Label}>Php {offer}</h3>
        <div className={Style.Seller}>
          <img className={Style.Pfp} src={pfp} alt={name} />
          <p>{name}</p>
        </div>
        <Reputation score={reputation} />
      </div>
      <ArrowOpenSvg className={Style.ArrowOpen} />
    </div>
  );
}
