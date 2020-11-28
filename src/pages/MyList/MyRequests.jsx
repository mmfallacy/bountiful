import React from "react";
import {BackgroundBlob, PageHeader, MyRequestCard} from "../../components"
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
    },
  ];

  const requests = [];
  mockData.map(({ sellerId, productImage, budget, productName }) =>
    requests.push(<MyRequestCard key={sellerId} imgSrc={productImage} budget={budget} product={productName} />)
  );

  return (
    <div className={Style.MyList}>
      <PageHeader ref={{ backRef: backButtonRef, actionRef: actionButtonRef }} label="My Requests" />
      <BackgroundBlob />
      <div className={Style.Content}>{requests}</div>
    </div>
  );
}
