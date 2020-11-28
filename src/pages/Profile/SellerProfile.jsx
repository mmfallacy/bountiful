import React from "react";
import { ReactComponent as EditSvg } from "./EditSvg.svg";
import {PageHeader, Reputation} from "../../components";
import Style from "./Profile.module.scss";

export default function MyProfile({ pfp, name, email, bio, reputation }) {
  return (
    <div>
      <PageHeader label="Seller's Profile" />
      <div className={Style.BodyBox}>
        <div className={Style.AccountInfo}>
          <img className={Style.Pfp} src={pfp} alt={name} />
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{bio}</p>
          <div className={Style.RepContainer}>
            <p>Reputation: </p>
            <Reputation score={reputation} />
          </div>
        </div>
      </div>
    </div>
  );
}
