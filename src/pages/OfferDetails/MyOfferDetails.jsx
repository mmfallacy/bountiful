import React from "react";
import { ReactComponent as DeleteSvg } from "./DeleteSvg.svg";
import {PageHeader} from "../../components";
import Style from "./OfferDetails.module.scss";

export default function OfferDetails(/* { imgSrc, seller: { pfp, name, reputation }, offer, product, desc } */) {
  const backButtonRef = React.createRef();
  const actionButtonRef = React.createRef();

  const imgSrc = "https://via.placeholder.com/160x90";
  const offer = 130;
  const product = "Black lamp";
  const desc =
    "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?";

  return (
    <div className={Style.OfferDetails}>
      <PageHeader ref={{ backRef: backButtonRef, actionRef: actionButtonRef }} actionIcon={<DeleteSvg />} label="Offer" />
      <img className={Style.ProductImage} src={imgSrc} alt={product} />
      <div className={Style.Content}>
        <h2 className={Style.Label}>{product}</h2>
        <p className={Style.Offer}>Offer: Php {offer}</p>
        <p className={Style.Desc}>{desc}</p>
      </div>
    </div>
  );
}
