import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../slice/ChatInfoSlice";
import authReducer from "../slice/AuthInfoSlice";
import chatDetailsReducer from "../slice/ChatSlice";

export default configureStore({
  reducer: { chatList: chatReducer, authInfo: authReducer, chatInfo: chatDetailsReducer},
});
