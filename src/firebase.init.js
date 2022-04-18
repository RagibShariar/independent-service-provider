import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGBObVFGqZolR9eL5fedpJglvdsWlS0E",
  authDomain: "ragib-photography-firebase.firebaseapp.com",
  projectId: "ragib-photography-firebase",
  storageBucket: "ragib-photography-firebase.appspot.com",
  messagingSenderId: "854080704979",
  appId: "1:854080704979:web:fa39cc784e27232f9f9f26" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;