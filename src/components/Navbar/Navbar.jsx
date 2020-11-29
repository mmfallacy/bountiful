import React from "react";
import { ReactComponent as Home } from "./Home.svg";
import { ReactComponent as MyRequests } from "./MyRequests.svg";
import { ReactComponent as MyOffers } from "./MyOffers.svg";
import { ReactComponent as Settings } from "./Settings.svg";
import {useHistory} from "react-router-dom"
import Style from "./Navbar.module.scss";

export default function Navbar() {
  const history = useHistory()

  const onHomeClick = () => {
    console.log("test")
    document.documentElement.scrollTop = 0
  }

  const onRequestsClick = () => history.push("/myaccount/listings")

  const onOffersClick = () => history.push("/myaccount/offers")

  const onSettingsClick = () => alert("Sorry! This section has not been implemented yet. Even a 404 page hasn't been implemented yet :'( ")


  return (
    <div className={Style.Navbar}>
      <NavbarButton active icon={Home} label="Home" onClick={onHomeClick}/>
      <NavbarButton icon={MyRequests} label="My Requests" onClick={onRequestsClick}/>
      <NavbarButton icon={MyOffers} label="My Offers" onClick={onOffersClick}/>
      <NavbarButton icon={Settings} label="Settings" onClick={onSettingsClick}/>
    </div>
  );
}

function NavbarButton({icon, label, active, onClick}){
  const Icon = icon

  return (
    <button className={Style.Button} onClick={onClick}>
      <Icon />
      <label className={`${Style.Label} ${active && Style.Active}`}>{label}</label>
    </button>
  )
}
