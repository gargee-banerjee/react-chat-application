import { createSlice } from "@reduxjs/toolkit";

import db from "../../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    activeChatInfo: {},
    chatList: [],
  },
  reducers: {
    updateActiveChat: (state, action) => {
      const activeChat = action.payload;
      state.activeChatInfo = activeChat;
      //   console.log(activeChat);
    },
    refreshChatList: (state, action) => {
      state.chatList = action.payload;
      //   console.log(state.chatList);
    },
    updateChatList: (state, action) => {
      state.chatList = [...action.payload, ...state.chatList];
      console.log(action.payload);
      //   console.log(state.chatList);
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
