// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTUL8RyCrKy3uS9TpLtdHTW9_WVVmPPF8",
  authDomain: "senior-project-7df88.firebaseapp.com",
  projectId: "senior-project-7df88",
  storageBucket: "senior-project-7df88.appspot.com",
  messagingSenderId: "1039617881626",
  appId: "1:1039617881626:web:24d3346e04616f1bff43a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);