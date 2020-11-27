import React from "react";
import { ReactComponent as ArrowOpen } from "./ArrowOpen.svg";
import Style from "./Card.module.scss";

export default function OfferCard({ imageSrc, seller, desc, price, name }) {
  return (
    <div className={Style.ListCard}>
      <img className={Style.Image} src={imageSrc} alt={name} />
      <div className={Style.Info}>
        <h3 className={Style.Label}>{seller}</h3>
        <p className={Style.Desc}>{desc}</p>
        <p className={Style.Price}>Price: Php {price}</p>
      </div>
      <ArrowOpen className={Style.ArrowOpen} />
    </div>
  );
}
