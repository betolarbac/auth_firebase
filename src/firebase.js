import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCs8LFPEOLJ7Wr5K3Cy6opqe6QKF5UzOOg",
    authDomain: "login-c7f9f.firebaseapp.com",
    projectId: "login-c7f9f",
    storageBucket: "login-c7f9f.appspot.com",
    messagingSenderId: "345400723048",
    appId: "1:345400723048:web:5c4bf1278e0910759a1ddd"
  };


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);