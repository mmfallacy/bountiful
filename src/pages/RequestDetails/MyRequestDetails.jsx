import React from "react";
import BackgroundBlob from "../../components/Background/BackgroundBlob";
import PageHeader from "../../components/PageHeader/PageHeader";
import OfferCard from "../../components/Card/OfferCard";
import Style from "./RequestDetails.module.scss";

export default function RequestDetails(/*{ imgSrc, product, budget, desc }*/) {
  const backButtonRef = React.createRef();
  const actionButtonRef = React.createRef();

  const imgSrc = "https://via.placeholder.com/150";
  const product = "Black lamb";
  const budget = 100;
  const desc =
    "She patiently waited for his number to be called. She had no desire to be there, but her mom had insisted that she go. She's resisted at first, but over time she realized it was simply easier to appease her and go. Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.";

  const mockData = [
    {
      productName: "Black lamb",
      requestId: "IDutyqwretyuretuyer",
      budget: 100,
      price: 150,
      description:
        "What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.",
      productImage: "https://via.placeholder.com/150",
      sellerId: "IDovsdainfedsmdfs6969",
      sellerName: "Michael",
      sellerAvatar: "https://via.placeholder.com/100",
      sellerReputation: Math.floor(Math.random() * 10) * 0.5,
    },
    {
      productName: "Black lamb",
      requestId: "IDfpaowejpweo",
      budget: 100,
      price: 120,
      description:
        "I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",
      productImage: "https://via.placeholder.com/200",
      sellerId: "IDgdsfgsdfgdsfsdf",
      sellerName: "Angelo",
      sellerAvatar: "https://via.placeholder.com/100",
      sellerReputation: Math.floor(Math.random() * 10) * 0.5,
    },
    {
      productName: "Black lamb",
      requestId: "IDkfnkvfdkfdkdf",
      budget: 100,
      price: 130,
      description:
        "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
      productImage: "https://via.placeholder.com/150x90",
      sellerId: "IDknbvnkvnnvbkb",
      sellerName: "Monasterial",
      sellerAvatar: "https://via.placeholder.com/100",
      sellerReputation: Math.floor(Math.random() * 10) * 0.5,
    },
    {
      productName: "Black lamb",
      requestId: "IDkfnkvfdkfdkdf",
      budget: 100,
      price: 130,
      description:
        "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
      productImage: "https://via.placeholder.com/150x90",
      sellerId: "IDa",
      sellerName: "Monasterial",
      sellerAvatar: "https://via.placeholder.com/100",
      sellerReputation: Math.floor(Math.random() * 10) * 0.5,
    },
    {
      productName: "Black lamb",
      requestId: "IDkfnkvfdkfdkdf",
      budget: 100,
      price: 130,
      description:
        "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
      productImage: "https://via.placeholder.com/150x90",
      sellerId: "IDab",
      sellerName: "Monasterial",
      sellerAvatar: "https://via.placeholder.com/100",
      sellerReputation: Math.floor(Math.random() * 10) * 0.5,
    },
    {
      productName: "Black lamb",
      requestId: "IDkfnkvfdkfdkdf",
      budget: 100,
      price: 130,
      description:
        "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
      productImage: "https://via.placeholder.com/150x90",
      sellerId: "IDabc",
      sellerName: "Monasterial",
      sellerAvatar: "https://via.placeholder.com/100",
      sellerReputation: Math.floor(Math.random() * 10) * 0.5,
    },
  ];

  const offers = [];
  mockData.map(({ sellerId, productImage, sellerAvatar, sellerName, sellerReputation, price, productName }) =>
    offers.push(
      <OfferCard
        key={sellerId}
        imgSrc={productImage}
        seller={{ pfp: sellerAvatar, name: sellerName, reputation: sellerReputation }}
        offer={price}
        product={productName}
      />
    )
  );

  return (
    <div className={Style.RequestDetails}>
      <PageHeader ref={{ backRef: backButtonRef, actionRef: actionButtonRef }} label="My Request" />
      <img className={Style.ProductImage} src={imgSrc} alt={product} />
      <div className={Style.Info}>
        <h1 className={Style.Label}>{product}</h1>
        <h4 className={Style.Price}>Php {budget}</h4>
      </div>
      <div className={Style.Desc}>
        <p>{desc}</p>
      </div>
      <div className={Style.Offers}>
        <BackgroundBlob />
        <h3 className={Style.OffersLabel}>Offers</h3>
        {offers}
      </div>
    </div>
  );
}
