// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/compat/firestore";
// import { getStorage } from "firebase/storage";
// import firebase from "firebase";

// import firebase from "firebase/compat/app"

import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA37rKY7F0B4tIwRuaRnv0rSkCiCihNfYc",
  authDomain: "whatsappweb-b32b1.firebaseapp.com",
  projectId: "whatsappweb-b32b1",
  storageBucket: "whatsappweb-b32b1.appspot.com",
  messagingSenderId: "823038123109",
  appId: "1:823038123109:web:a3157911a94e70f21f3a8c",
  measurementId: "G-Q01WWT0FG0",
};

// const app =firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new firebaseConfig.auth.GooglrAuthProvider();
// export const storage = getStorage(app);


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;