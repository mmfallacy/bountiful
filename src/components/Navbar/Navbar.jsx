import React from "react";
import { ReactComponent as HomeSvg } from "./HomeSvg.svg";
import { ReactComponent as MyRequests } from "./MyRequestsSvg.svg";
import { ReactComponent as MyOffers } from "./MyOffersSvg.svg";
import { ReactComponent as Settings } from "./SettingsSvg.svg";
import Style from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={Style.Navbar}>
      <div className={Style.Section}>
        <HomeSvg className={Style.Icon} />
        <p className={Style.Label}>Home</p>
      </div>
      <div className={Style.Section}>
        <MyRequests className={Style.Icon} />
        <p className={Style.Label}>My Requests</p>
      </div>
      <div className={Style.Section}>
        <MyOffers className={Style.Icon} />
        <p className={Style.Label}>My Offers</p>
      </div>
      <div className={Style.Section}>
        <Settings className={Style.Icon} />
        <p className={Style.Label}>Settings</p>
      </div>
    </div>
  );
}
