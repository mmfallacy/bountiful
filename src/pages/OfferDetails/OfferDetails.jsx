import React from "react";
import {PageHeader, Reputation} from "../../components";
import Style from "./OfferDetails.module.scss";

export default function OfferDetails(/* { imgSrc, seller: { pfp, name, reputation }, offer, product, desc } */) {
  const backButtonRef = React.createRef();
  const actionButtonRef = React.createRef();

  const imgSrc = "https://via.placeholder.com/160x90";
  const { pfp, name, reputation } = { pfp: "https://via.placeholder.com/100", name: "Lance Admin", reputation: 4.5 };
  const offer = 130;
  const product = "Black lamp";
  const desc =
    "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?";

  return (
    <div className={Style.OfferDetails}>
      <PageHeader ref={{ backRef: backButtonRef, actionRef: actionButtonRef }} label="Offer" />
      <img className={Style.ProductImage} src={imgSrc} alt={product} />
      <div className={Style.Content}>
        <div className={Style.Seller}>
          <img className={Style.Pfp} src={pfp} alt={name}></img>
          <div className={Style.SellerInfo}>
            <h2 className={Style.Label}>{name}</h2>
            <Reputation score={reputation} />
          </div>
        </div>
        <p className={Style.Offer}>Php {offer}</p>
        <p className={Style.Desc}>{desc}</p>
      </div>
    </div>
  );
}
