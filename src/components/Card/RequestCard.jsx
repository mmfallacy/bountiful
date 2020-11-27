import React from "react";
import { ReactComponent as ArrowOpen } from "./ArrowOpen.svg";
import Style from "./Card.module.scss";

export default function RequestCard({ imageSrc, name, price }) {
  return (
    <div className={Style.ListCard}>
      <img className={Style.Image} src={imageSrc} />
      <div className={Style.Info}>
        <h3 className={Style.Name}>{name}</h3>
        <p className={Style.Price}>Suggested Price: Php {price}</p>
      </div>
      <ArrowOpen className={Style.ArrowOpen} />
    </div>
  );
}
