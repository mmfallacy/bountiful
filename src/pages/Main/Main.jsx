import React, { useState, useEffect } from "react";
import {BackgroundBlobRepeat, FeedCard, SearchBar, Navbar} from "../../components"

import Style from "./Main.module.scss";

import {useAPI} from "../../store"
import {useHistory} from "react-router-dom"

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

function Main() {
  const [listings, setListings] = useState([]);

  const API = useAPI(state=>state.instance)

  const {name, pfp} = API.user

  const history = useHistory()

  console.log(API.user)

  useEffect(()=>{
    async function onComponentMount(){
      const result = await API.retrieveAllListings()
      setListings(result)
    }
    onComponentMount()
  })

  const feed = listings.map(({ id, photo, title, price }) =>
    <FeedCard key={id} imgSrc={photo} budget={price} product={title} />
  );

  return (
    <div className={Style.Main}>
      <div className={Style.ProfilePicContainer}>
        <img className={Style.Pfp} src={pfp} alt={name} onClick={()=>history.push("/myaccount")} />
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
