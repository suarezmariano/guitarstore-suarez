// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV4L6M01xOwgAITojeI8PeeAThy22X0vQ",
  authDomain: "guitarstore-suarez.firebaseapp.com",
  projectId: "guitarstore-suarez",
  storageBucket: "guitarstore-suarez.appspot.com",
  messagingSenderId: "928165804068",
  appId: "1:928165804068:web:f58af2ddd15a667e82c0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);