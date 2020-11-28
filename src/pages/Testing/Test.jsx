import React from "react";
import FeedCard from "../../components/Card/FeedCard";
import OfferCard from "../../components/Card/OfferCard";
import MyOfferCard from "../../components/Card/MyOfferCard";
import MyRequestCard from "../../components/Card/MyRequestCard";
import Style from "./Test.module.scss";

export default function Test() {
  return (
    <div className={Style.Test}>
      <FeedCard product="Black Lamp" budget={120} imgSrc="https://via.placeholder.com/160x90" />
      <MyRequestCard product="Black Lamp" budget={120} imgSrc="https://via.placeholder.com/160x90" />
      <OfferCard
        product="Black Lamp"
        offer={120}
        imgSrc="https://via.placeholder.com/160x90"
        seller={{ pfp: "https://via.placeholder.com/50", name: "Lance Admin", reputation: 4.5 }}
      />
      <MyOfferCard product="Black Lamp" budget={120} offer={570} imgSrc="https://via.placeholder.com/160x90" />
    </div>
  );
}
