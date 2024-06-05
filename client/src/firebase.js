// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "akshat-portfolio-2ef76.firebaseapp.com",
  projectId: "akshat-portfolio-2ef76",
  storageBucket: "akshat-portfolio-2ef76.appspot.com",
  messagingSenderId: "37507971985",
  appId: "1:37507971985:web:587557c3c719f84ca33830",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
