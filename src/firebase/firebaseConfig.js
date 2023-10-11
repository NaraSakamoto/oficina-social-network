import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOogvplwnp5mooYM_E1e-JpeLVW8gnQW8",
  authDomain: "perolas-checkout.firebaseapp.com",
  projectId: "perolas-checkout",
  storageBucket: "perolas-checkout.appspot.com",
  messagingSenderId: "20608029376",
  appId: "1:20608029376:web:ed75a579bb066237651325"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);