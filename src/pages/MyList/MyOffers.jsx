import React from "react";
import {BackgroundBlob, PageHeader, MyOfferCard} from "../../components"
import Style from "./MyList.module.scss";

export default function MyOffers(/* { requests } */) {
  const backButtonRef = React.createRef();
  const actionButtonRef = React.createRef();

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
  mockData.map(({ sellerId, productImage, price, productName, budget }) =>
    offers.push(<MyOfferCard key={sellerId} imgSrc={productImage} offer={price} budget={budget} product={productName} />)
  );

  return (
    <div className={Style.MyList}>
      <PageHeader ref={{ backRef: backButtonRef, actionRef: actionButtonRef }} label="My Offers" />
      <BackgroundBlob />
      <div className={Style.Content}>{offers}</div>
    </div>
  );
}
