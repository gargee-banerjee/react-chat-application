import React, { useRef, useState } from "react";
import style from "./style.module.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import IconButton from "@material-ui/core/IconButton";
import MicIcon from "@material-ui/icons/Mic";

const ChatInputComp = () => {
  const [message, setMessage] = useState("");

  const mssgChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const sendMessageHandler = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    <div className={style.chat__input__body}>
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <form>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={mssgChangeHandler}
        ></input>
        <button type="submit" onClick={sendMessageHandler}></button>
      </form>
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
};
export default ChatInputComp;
