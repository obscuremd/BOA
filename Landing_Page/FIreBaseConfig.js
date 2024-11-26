// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQox4JAh8E8pyJI48CYpzSKviqnYkr-Ac",
  authDomain: "palmpay-b9aa5.firebaseapp.com",
  databaseURL: "https://palmpay-b9aa5-default-rtdb.firebaseio.com",
  projectId: "palmpay-b9aa5",
  storageBucket: "palmpay-b9aa5.appspot.com",
  messagingSenderId: "387866427626",
  appId: "1:387866427626:web:6451fc33ad9f54fe201793",
  measurementId: "G-H070J66J1Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);