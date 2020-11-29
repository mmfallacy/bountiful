import React, {useState, useEffect} from "react";
import { ReactComponent as ArrowOpenSvg } from "./ArrowOpen.svg";
import Reputation from "../Reputation/Reputation";
import Style from "./Card.module.scss";

import {useAPI} from "../../store"

export default function OfferCard({ imgSrc, seller, offer, product }) {

  const [sellerObj, setSeller] = useState({})

  const API = useAPI(state=>state.instance)

  useEffect(()=>{
    async function onComponentMount(){
      const result = await API.retrieveUserById(seller)
      setSeller(result)
    }
    onComponentMount()
  })

  return (
    <div className={`${Style.Card} ${Style.ListCard}`}>
      <img className={Style.Image} src={imgSrc} alt={product} />
      <div className={Style.Info}>
        <h3 className={Style.Label}>Php {offer}</h3>
        <div className={Style.Seller}>
          <img className={Style.Pfp} src={sellerObj.pfp} alt={sellerObj.name} />
          <p>{sellerObj.name}</p>
        </div>
        <Reputation score={sellerObj.reputation} />
      </div>
      <ArrowOpenSvg className={Style.ArrowOpen} />
    </div>
  );
}
