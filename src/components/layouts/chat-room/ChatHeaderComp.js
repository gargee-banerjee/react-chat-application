import React from "react";
import style from "./style.module.css";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ChatHeaderComp = ({ roomName }) => {
  const randomId = Math.floor(Math.random() * 1000);
  return (
    <div className={style.chatRoomHeader__container}>
      <div className={style.chatRoomHeader__info}>
        <Avatar src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${randomId}`}></Avatar>
        <div>
          <div className={style.contact__name}>{roomName}</div>
          <div>Last seen at...</div>
        </div>
      </div>
      <div className={style.chatHeaderButton}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatHeaderComp;
