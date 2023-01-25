// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf8dKyoTM-0OuBAsCuAjlMd9jtYovv7sY",
  authDomain: "mobile-a67c5.firebaseapp.com",
  projectId: "mobile-a67c5",
  storageBucket: "mobile-a67c5.appspot.com",
  messagingSenderId: "759664047569",
  appId: "1:759664047569:web:035014fa55a4c5e2c21cf0",
  measurementId: "G-Y59WLWBY1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig)
export default firebase;