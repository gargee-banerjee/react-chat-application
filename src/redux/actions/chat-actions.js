import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../../config/firebase";
import { chatActions } from "../slice/ChatSlice";

export const fetchData = () => {
  return async (dispatch) => {
    let list = [];

    const getData = async () => {
      let list1 = [];
      let querySnapshot = await getDocs(collection(db, "room"));
      querySnapshot.forEach((doc) => {
        if (doc.id && doc.data() && doc.data().name)
          list1.push({ chatId: doc.id, chatName: doc.data().name });
      });

      if (list1.length === 0) {
        //   // toast.error("Error occured while getting contacts");
        console.error("Error occured while getting contacts");
        return;
      }
      return list1;
    };

    try {
      list = await getData();
      dispatch(chatActions.refreshChatList(list));
    } catch (e) {
      console.error("Error occured while getting contacts");
    }
  };
};
