import React from "react";
import { ReactComponent as MedalSvg } from "./Medal.svg";
import { ReactComponent as HalfMedalSvg } from "./HalfMedal.svg";
import Style from "./Card.module.scss";

export default function Reputation({ score }) {
  const medals = [];
  for (let i = 0; i < Math.floor(score); i++) medals.push(<MedalSvg />);
  if (score % 2 === 0.5) medals.push(<HalfMedalSvg />);

  return <div className={Style.Reputation}>{medals}</div>;
}
