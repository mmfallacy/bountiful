import React, { useState } from "react";
import BackgroundBlobRepeat from "../../components/Background/BackgroundBlobRepeat";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeedCard from "../../components/Card/FeedCard";
import Navbar from "../../components/Navbar/Navbar";

import Style from "./Main.module.scss";

function Main() {
  const [isInSellerMode, setMode] = useState(false);

  const name = "Lance Admin";
  const pfp = "https://via.placeholder.com/100";

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
      productImage: "https://via.placeholder.com/330x150",
      sellerId: "IDknbvnkvnnvbkb",
    },
    {
      productName: "Black lamb",
      requestId: "IDkfnkvfdkfdkdf",
      budget: 100,
      price: 130,
      description:
        "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
      productImage: "https://via.placeholder.com/330x150",
      sellerId: "IDa",
    },
    {
      productName: "Black lamb",
      requestId: "IDkfnkvfdkfdkdf",
      budget: 100,
      price: 130,
      description:
        "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
      productImage: "https://via.placeholder.com/330x150",
      sellerId: "IDab",
    },
    {
      productName: "Black lamb",
      requestId: "IDkfnkvfdkfdkdf",
      budget: 100,
      price: 130,
      description:
        "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
      productImage: "https://via.placeholder.com/330x150",
      sellerId: "IDabc",
    },
  ];

  const feed = [];
  mockData.map(({ sellerId, productImage, productName, budget }) =>
    feed.push(<FeedCard key={sellerId} imgSrc={productImage} budget={budget} product={productName} />)
  );

  return (
    <div className={Style.Main}>
      <div className={Style.ProfilePicContainer}>
        <img className={Style.Pfp} src={pfp} alt={name} />
      </div>
      <div className={Style.Content}>
        <h1 className={Style.Greetings}>Hey {name.split(" ")[0]},</h1>
        <h3 className={Style.Catchphrase}>Look for potential buyers now!</h3>
        <SearchBar />
        <h2 className={Style.Label}>What's New?</h2>
        {feed}
      </div>
      <Navbar/>
      <BackgroundBlobRepeat/>
    </div>
  );
}

export default Main;
