import { createSlice } from "@reduxjs/toolkit";
// import db from "../../config/firebase";
// import { collection, getDocs, addDoc } from "firebase/firestore";

let initialState = {
  contactList: [],
  activeChatInfo: { chatId: "", chatName: "" },
};
const chatSlice = createSlice({
  name: "chatInfo",
  initialState: {
    contactList: [],
    activeChatInfo: { chatId: "", chatName: "" },
  },
  reducers: {
    getContactList: async (state, action) => {
      // console.log(action.payload)
      // state.contactList = [...state.contactList,...action.payload];
      // let list = [];
      // const getData = async () => {
      //   let list1 = [];
      //   let querySnapshot;
      //   querySnapshot = await getDocs(collection(db, "room"));
      //   querySnapshot.forEach((doc) => {
      //     list1.push(doc._document.data.value.mapValue.fields.name.stringValue);
      //   });
      //   if (list1.length === 0) {
      //     //   // toast.error("Error occured while getting contacts");
      //     console.error("Error occured while getting contacts");
      //     return;
      //   }
      //   return list1;
      // };
      // list = await getData();
      // state.contactList = list;
      // console.log(state.contactList);
    },
    updateActiveChat:(state, action) =>{
      const activeChat = action.payload;
      state.activeChatInfo = activeChat;
      console.log(activeChat);
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
