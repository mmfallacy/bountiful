import React, {useState, useEffect} from "react";
import {BackgroundBlobRepeat, PageHeader, MyRequestCard} from "../../components"
import Style from "./MyList.module.scss";
import {useAPI} from "../../store"
import {ReactComponent as Add} from "./add.svg"
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

export default function MyRequests() {
  const [requests, setRequests] = useState([])

  const API = useAPI(state=>state.instance) 

  const history = useHistory()

  useEffect(()=>{
    async function onComponentMount(){
      if (API.user){
        const listings = await API.retrieveMultipleListingsById(API.user.listings)
        setRequests(listings)
      }
    }
    onComponentMount()
  }, [])

  return (
    <div className={Style.MyList}>
      <PageHeader label="My Requests" actionIcon={<Add/>} onActionClick={()=>history.push('/newlisting')}/>
      <BackgroundBlobRepeat />
      <div className={Style.Content}>
        {requests && requests.map(({ id, photo, title, price }) =>
            <MyRequestCard key={id} imgSrc={photo} budget={price} product={title} />
        )}  
      </div>
    </div>
  );
}
