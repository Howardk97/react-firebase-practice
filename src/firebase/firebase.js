import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoE8veT19F4Dr37j-VZvAjhDY5p1XbQj8",
  authDomain: "react-firebase-prac-dfb1f.firebaseapp.com",
  projectId: "react-firebase-prac-dfb1f",
  storageBucket: "react-firebase-prac-dfb1f.appspot.com",
  messagingSenderId: "189255091792",
  appId: "1:189255091792:web:8eed2174143f9ba608b355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};