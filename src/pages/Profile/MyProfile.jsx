import React from "react";
import { ReactComponent as EditSvg } from "./EditSvg.svg";
import {PageHeader} from "../../components";
import Style from "./Profile.module.scss";

export default function MyProfile({ pfp, name, email, bio }) {
  return (
    <div>
      <PageHeader label="My Profile" actionIcon={<EditSvg />} />
      <div className={Style.BodyBox}>
        <div className={Style.AccountInfo}>
          <img className={Style.Pfp} src={pfp} alt={name} />
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
