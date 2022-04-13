// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnbHLOIVRzKxIFhU9hrK-F9FlWn4luDko",
  authDomain: "my-car-service-ef2d8.firebaseapp.com",
  projectId: "my-car-service-ef2d8",
  storageBucket: "my-car-service-ef2d8.appspot.com",
  messagingSenderId: "62311580751",
  appId: "1:62311580751:web:c4dfbad71c41894733163a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;