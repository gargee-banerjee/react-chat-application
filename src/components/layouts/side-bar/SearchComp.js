import React from "react";
import style from "./style.module.css";

import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchComp = () => {
  return (
    <div className={style["search__body"]}>
      {/* <IconButton> */}
        <SearchIcon className={style["search__icon"]}/>
      {/* </IconButton> */}
      <input placeholder="Search chats" type="text"></input>
    </div>
  );
};

export default SearchComp;
