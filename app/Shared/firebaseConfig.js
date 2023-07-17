// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
require("dotenv").config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pins-8845f.firebaseapp.com",
  projectId: "pins-8845f",
  storageBucket: "pins-8845f.appspot.com",
  messagingSenderId: "603146053345",
  appId: "1:603146053345:web:1e681f833c77d5c4e0f9a0",
  measurementId: "G-5XNLV9E192",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
