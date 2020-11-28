import React, {useEffect, useState} from "react";
import { ReactComponent as EditSvg } from "./EditSvg.svg";
import {PageHeader} from "../../components";
import Style from "./Profile.module.scss";

const mockQuery = (uid) => ({ 
  photo: "https://via.placeholder.com/150", 
  name: "Lance Admin", 
  email: "lance@admin.com", 
  bio:"woh", 
  reputation: 4.25})

export default function MyProfile() {
  const uid = "12"
  const [account, setAccount] = useState(null)

  useEffect(()=>{
    async function onComponentMount(){
      const result = mockQuery(uid)
      await setAccount(result)
    }

    onComponentMount()
  },[])

  return (
    <div>
      <PageHeader label="My Profile" actionIcon={<EditSvg />} />
      {account && <div className={Style.BodyBox}>
        <div className={Style.AccountInfo}>
          <img className={Style.Pfp} src={account.photo} alt={account.name} />
          <h1>{account.name}</h1>
          <p>{account.email}</p>
          <p>{account.bio}</p>
        </div>
      </div>}
    </div>
  );
}
