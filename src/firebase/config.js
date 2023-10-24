// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2yCvLzJcfandDRuLvZ3--vK_don1dEo",
  authDomain: "learnlanguageapp-ab33d.firebaseapp.com",
  databaseURL:
    "https://learnlanguageapp-ab33d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlanguageapp-ab33d",
  storageBucket: "learnlanguageapp-ab33d.appspot.com",
  messagingSenderId: "130495042084",
  appId: "1:130495042084:web:497bed32f55f7759257eb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
