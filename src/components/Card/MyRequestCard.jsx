import React from "react";
import { ReactComponent as ArrowOpenSvg } from "./ArrowOpen.svg";
import Style from "./Card.module.scss";

export default function RequestCard({ imgSrc, product, budget }) {
  return (
    <div className={`${Style.Card} ${Style.ListCard} ${!imgSrc && Style.noImage}`}>
      {imgSrc && <img className={Style.Image} src={imgSrc} alt={product} />}
      <div className={Style.Info}>
        <h3 className={Style.Label}>{product}</h3>
        <p className={Style.Price}>Php {budget}</p>
      </div>
      <ArrowOpenSvg className={Style.ArrowOpen} />
    </div>
  );
}
