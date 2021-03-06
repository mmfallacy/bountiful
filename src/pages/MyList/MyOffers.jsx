import React, {useState, useEffect} from "react";
import {BackgroundBlobRepeat, PageHeader, MyOfferCard} from "../../components"
import Style from "./MyList.module.scss";
import {useAPI} from "../../store"


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

export default function MyOffers(/* { requests } */) {
  const [offers, setOffers] = useState([])


  const API = useAPI(state=>state.instance) 

  useEffect(()=>{
    async function onComponentMount(){
      if (API.user){
        const offers = await API.retrieveMultipleOffersById(API.user.offers)
        const listingsid = offers.map((el)=>el.listing)
        const listings = await API.retrieveMultipleListingsById(listingsid)
        
        offers.map( el => 
          ({...el, budget: listings.filter(listing => listing.id===el.listing)[0].price})
        )

        console.log(offers)
        setOffers(offers)
      }
    }
    onComponentMount()
  }, [])

  return (
    <div className={Style.MyList}>
      <PageHeader label="My Offers"/>
      <BackgroundBlobRepeat />
      <div className={Style.Content}>
        {offers && offers.map(({ id, photo, productName, price }) =>
          <MyOfferCard key={id} imgSrc={[photo]} offer={price} product={productName} />
        )}
      </div>
    </div>
  );
}
