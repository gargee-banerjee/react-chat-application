import { Button } from "@material-ui/core";
import React from "react";
import style from "./style.module.css";
import { whatsAppLogo } from "../../../assets/index";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useDispatch } from "react-redux";
import {authActions} from '../../../redux/slice/AuthInfoSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  //Google Authentication
  const provider = new GoogleAuthProvider();
  const handleSignInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        dispatch(authActions.updateAuthInfo(result.user))
        // console.log(result.user);
        // console.log(credential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        dispatch(authActions.updateAuthInfo())
        console.log(errorMessage);

        // toast.error(errorMessage)3e48w2'
      });
  };
  return (
    <div className={style.signIn_container}>
      <div>
        <img src={whatsAppLogo} alt="whatsAppLogo"></img>
      </div>
      <div>Sign In to WhatsApp</div>
      <form>
        <Button onClick={handleSignInWithGoogle}>Sign in with Google</Button>
      </form>
    </div>
  );
};

export default SignIn;
