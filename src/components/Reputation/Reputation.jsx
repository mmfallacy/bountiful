import React from "react";
import { ReactComponent as FullMedalSvg } from "./FullMedal.svg";
import { ReactComponent as HalfMedalSvg } from "./HalfMedal.svg";
import { ReactComponent as NewMedalSvg } from "./NewMedal.svg";
import Style from "./Reputation.module.scss";

export default function Reputation({ score }) {
  const medals = [];
  for (let i = 0; i < Math.floor(score); i++) medals.push(<FullMedalSvg key={i}/>);
  if (score % 1 === 0.5) medals.push(<HalfMedalSvg key="half"/>);
  for (let i = 0; i < Math.floor(5 - score); i++) medals.push(<NewMedalSvg key={`${i}-none`}/>);

  return <div className={Style.Reputation}>{medals}</div>;
}
