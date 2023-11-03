import React, { useEffect, useState } from "react";
import ChatHeaderComp from "./ChatHeaderComp";
import style from "./style.module.css";
import ChatInputComp from "./ChatInputComp";
import db from "../../../config/firebase";

import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const ChatRoom = () => {
  const [chats, setChats] = useState([]);
  let chatId = "";
  let chatName = "";
  const activeChatInfo = useSelector((state) => state.chatInfo.activeChatInfo);
  if (activeChatInfo) {
    chatId = activeChatInfo.chatId;
    chatName = activeChatInfo.chatName;
  }
  useEffect(() => {
    const getChats = async () => {
      const querySnapshot = await getDocs(
        collection(db, "room", chatId, "messages")
      );
      setChats(
        querySnapshot.docs.map((doc) => {
          return doc.data();
        })
      );

      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   // console.log(doc.id, " => ", doc.data());
      //   messageList.push(doc.data());
      // });
    };
    if (chatId) getChats();
  }, []);

  return (
    <div className={style.chat__room__body}>
      <ChatHeaderComp roomName={chatName}></ChatHeaderComp>
      <div className={style.chat__body}>
        {chats.map((chat) => (
          <div
             className={`${style.chat__message} ${true && style.char_receiver}`}
          >
            {chat.message}
            <span className={style.chat__sender}>{chat.name}</span>
            <span className={style.chat__timestamp}>{chat.timestamp.seconds}</span>
          </div>
        ))}
      </div>
      <ChatInputComp></ChatInputComp>
    </div>
  );
};

export default ChatRoom;
