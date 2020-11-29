import React, {useEffect, useState} from "react";
import {PageHeader, Reputation} from "../../components";
import Style from "./Profile.module.scss";
import {useAPI} from "../../store"


export default function SellerProfile(props) {
  const uid = props.match.params.uid
  const [account, setAccount] = useState(null)
  
  const API = useAPI(state=>state.instance)

  useEffect(()=>{
    async function onComponentMount(){
      const result = await API.retrieveUserById(uid)
      setAccount(result)
    }
    onComponentMount()
  }, [])

  return (
    <div>
      <PageHeader label="Seller's Profile"/>
      { account && <div className={Style.BodyBox}>
        <div className={Style.AccountInfo}>
          <img className={Style.Pfp} src={account.pfp} alt={account.name} />
          <h1>{account.name}</h1>
          <p>{account.email}</p>
          <p>{account.bio}</p>
          <div className={Style.RepContainer}>
            <p>Reputation: </p>
            <Reputation score={account.karma} />
          </div>
        </div>
      </div>}
    </div>
  );
}
