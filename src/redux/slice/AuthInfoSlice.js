import { createSlice } from "@reduxjs/toolkit";

const authInfoSlice = createSlice({
  name: "authInfo",
  initialState: {
    isSignedIn: false,
    userInfo: {},
    activeChatInfo:{},
  },
  reducers: {
    updateAuthInfo: (state, action) => {
      const userInfo = action.payload;
      //   console.log(userInfo);
      if (userInfo) {
        state.isSignedIn = true;
        state.userInfo = userInfo;
      } else {
        state.isSignedIn = false;
        state.userInfo = {};
      } 
    },
    updateActiveChat: (state, action) => {
      const activeChat = action.payload;
      state.activeChatInfo = activeChat;
      console.log(activeChat);
    },
  },
});

export const authActions = authInfoSlice.actions;
export default authInfoSlice.reducer;
