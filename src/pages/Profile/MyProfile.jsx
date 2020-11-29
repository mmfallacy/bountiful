import React, {useEffect, useState} from "react";
import { ReactComponent as EditSvg } from "./EditSvg.svg";
import {PageHeader} from "../../components";
import Style from "./Profile.module.scss";
import {useAPI} from "../../store"


export default function MyProfile() {
  const [account, setAccount] = useState(null)
  const API = useAPI(state =>state.instance)


  useEffect(()=>{
    console.log(API.user)
    setAccount(API.user)
  },[])

  return (
    <div>
      <PageHeader label="My Profile" actionIcon={<EditSvg />} />
      {account && <div className={Style.BodyBox}>
        <div className={Style.AccountInfo}>
          <img className={Style.Pfp} src={account.pfp} alt={account.name} />
          <h1>{account.name}</h1>
          <p>{account.email}</p>
          <p>{account.bio}</p>
        </div>
      </div>}
    </div>
  );
}
