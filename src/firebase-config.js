import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBWKbNXv4dGqJXPEy4DtYT7kusD9f3F0ug",
    authDomain: "gpt-guider.firebaseapp.com",
    projectId: "gpt-guider",
    storageBucket: "gpt-guider.appspot.com",
    messagingSenderId: "200239601743",
    appId: "1:200239601743:web:58647bef88c9e476d0b23a",
    measurementId: "G-G2G88ZM5M2"
  };

  const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app)