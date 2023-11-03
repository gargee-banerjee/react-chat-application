import { useEffect, useState } from "react";
import style from "./App.module.css";
import { ChatRoom, SideBar } from "./components/layouts/index";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { chatActions } from "./redux/slice/ChatInfoSlice";
import { fetchData } from "./redux/actions/chat-actions";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import SignIn from "./components/layouts/sign-in/SignIn";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authInfo.isSignedIn);
  // console.log(isLoggedIn)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // dispatch(chatActions.getChatList());
    dispatch(fetchData());

    // dispatch(chatAction.getChatList());
  }, []);

  return (
    <div className={style.app}>
      {!isLoggedIn && <SignIn />}
      {isLoggedIn && (
        <div className={style.appBody}>
          <BrowserRouter>
            <SideBar />
            <Routes>
              <Route path="/room/:roomName" element={<ChatRoom />}></Route>
              <Route path="/room" element={<h2>No Page</h2>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
