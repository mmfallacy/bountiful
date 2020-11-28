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
        <h5 className={Style.Label}>Home</h5>
      </div>
      <div className={Style.Section}>
        <MyRequests className={Style.Icon} />
        <h5 className={Style.Label}>My Requests</h5>
      </div>
      <div className={Style.Section}>
        <MyOffers className={Style.Icon} />
        <h5 className={Style.Label}>My Offers</h5>
      </div>
      <div className={Style.Section}>
        <Settings className={Style.Icon} />
        <h5 className={Style.Label}>Settings</h5>
      </div>
    </div>
  );
}
