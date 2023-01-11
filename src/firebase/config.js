// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBcT6xREqAziOi8XMPzncnvCpf3FOHXS4",
  authDomain: "ecomm-52938.firebaseapp.com",
  projectId: "ecomm-52938",
  storageBucket: "ecomm-52938.appspot.com",
  messagingSenderId: "898068104216",
  appId: "1:898068104216:web:a61e529afa660da800af6d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

//this configuration is used by mitumariam19@gmail.com