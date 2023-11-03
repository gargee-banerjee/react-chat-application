import React from "react";
import style from "./style.module.css";
import SideBarHeaderOperations from "./SideBarHeaderOperations";
import SearchComp from "./SearchComp";

import { Avatar } from "@material-ui/core";
import SideBarContacts from "./SideBarContacts";
import { useSelector } from "react-redux";

const SideBar = () => {
  const userInfo = useSelector((state) => state.authInfo.userInfo);
  const profileUrl = userInfo ? userInfo.photoURL : "";

  return (
    <div className={style["sidebar__body"]}>
      <div className={style["sidebar__header"]}>
        <div className={style["sidebar__profile"]}>
          {/* <div className={style["sidebar__profile__img"]}> */}
          <Avatar src={profileUrl}></Avatar>
          {/* </div> */}
        </div>
        <div className={style["sidebar__operations"]}>
          <SideBarHeaderOperations />
        </div>
      </div>
      <div className={style["sidebar__search"]}>
        <SearchComp />
      </div>
      <div className={style["sidebar__chats"]}>
        <SideBarContacts />
      </div>
    </div>
  );
};

export default SideBar;
