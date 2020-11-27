import React from "react";
import { ReactComponent as ArrowOpen } from "./ArrowOpen.svg";
import Style from "./Card.module.scss";

export default function FeedCard({ name, price, desc, imgSrc }) {
  return (
    <div className={`${Style.FeedCard} ${Style.Card}`}>
      <h3 className={Style.Label}>{name}</h3>
      <p className={Style.Price}>Suggested Price: Php {price}</p>
      <p className={Style.Desc}>{desc}</p>
      <img className={Style.Image} src={imgSrc} alt={name} />
      <div className={Style.Footer}>
        {/* <div className={Style.FooterContent}> */}
        <p>Make an offer</p>
        <ArrowOpen className={Style.ArrowOpen} />
      </div>
      {/* </div> */}
    </div>
  );
}
