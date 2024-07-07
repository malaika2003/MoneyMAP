// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB69utn6PEwm_UOq9ApCDAZ7C68-6BXJgU",
  authDomain: "moneymap-745c0.firebaseapp.com",
  projectId: "moneymap-745c0",
  storageBucket: "moneymap-745c0.appspot.com",
  messagingSenderId: "615914313007",
  appId: "1:615914313007:web:d56ed279c2bfcc3066bdda"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
