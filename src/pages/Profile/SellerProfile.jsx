import React, {useEffect, useState} from "react";
import {PageHeader, Reputation} from "../../components";
import Style from "./Profile.module.scss";


const mockQuery = (uid) => ({ 
  photo: "https://via.placeholder.com/150", 
  name: "Lance Admin", 
  email: "lance@admin.com", 
  bio:"woh", 
  reputation: 4.25})

export default function SellerProfile(props) {
  const uid = props.match.params.uid
  const [account, setAccount] = useState(null)
  
  useEffect(()=>{
    async function onComponentMount(){
      const result = mockQuery(uid)
      console.log(result)
      await setAccount(result)
    }
    onComponentMount()
  }, [])

  return (
    <div>
      <PageHeader label="Seller's Profile" />
      { account && <div className={Style.BodyBox}>
        <div className={Style.AccountInfo}>
          <img className={Style.Pfp} src={account.photo} alt={account.name} />
          <h1>{account.name}</h1>
          <p>{account.email}</p>
          <p>{account.bio}</p>
          <div className={Style.RepContainer}>
            <p>Reputation: </p>
            <Reputation score={account.reputation} />
          </div>
        </div>
      </div>}
    </div>
  );
}
