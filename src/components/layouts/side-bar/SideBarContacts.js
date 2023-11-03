import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import db from "../../../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";

import { chatActions } from "../../../redux/slice/ChatSlice";
import { authActions } from "../../../redux/slice/AuthInfoSlice";

const ContactInfo = ({ info }) => {
  const dispatch = useDispatch();
  const randomId = Math.floor(Math.random() * 5000);
  const chatName = info.chatName;

  const handleSelectedChatRoom = () => {
    dispatch(chatActions.updateActiveChat(info));
  };

  return (
    <div className={style.contact__infoBody} onClick={handleSelectedChatRoom}>
      <Avatar
        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${randomId}`}
      ></Avatar>
      <div>
        <div className={style.contact__name}>{chatName}</div>
        <div className={style.last__message}>Last message</div>
      </div>
    </div>
  );
};

const SideBarContacts = () => {
  const dispatch = useDispatch();
  const contactInfoList = useSelector((state) => state.chatInfo.chatList);

  const createChatRoom = async () => {
    const roomName = window.prompt("Chat Room name");
    if (!roomName) {
      alert("Room name is required");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "room"), {
        name: roomName,
      });
      const chatObj = [{ chatId: docRef.id, chatName: roomName }];
      console.log(chatObj);
      dispatch(chatActions.updateChatList(chatObj));
    } catch (e) {
      console.error("Error adding document: ", e);
      // toast.error();
    }
  };

  return (
    <div className={style.contact__container}>
      <div className={style.contact__addnewchat} onClick={createChatRoom}>
        Add new chat
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
      {contactInfoList &&
        contactInfoList.map((obj) => (
          <ContactInfo key={obj.chatId} info={obj} />
        ))}
    </div>
  );
};

export default SideBarContacts;
