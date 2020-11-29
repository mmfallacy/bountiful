import React from "react";
import { ReactComponent as SearchSvg } from "./Search.svg";
import Style from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <form className={Style.SearchBar} onSubmit={(e)=>e.preventDefault()}>
      <button className={Style.Submit} type="submit">
        <SearchSvg className={Style.SearchSvg} />
      </button>
      <input className={Style.Input} type="search" placeholder="Search for requests" name="query" autoComplete="off" />
    </form>
  );
}
