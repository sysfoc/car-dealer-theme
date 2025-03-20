// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAJ0JEIxFr5gnXuH94j4ly9VuBCy4jgtZc",
  authDomain: "temu-clone-a4baa.firebaseapp.com",
  projectId: "temu-clone-a4baa",
  storageBucket: "temu-clone-a4baa.firebasestorage.app",
  messagingSenderId: "326460405940",
  appId: "1:326460405940:web:079d4d87b030f025977fe1",
  measurementId: "G-43G0G3FT6S" // Optional, you can remove this if not using analytics
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, provider , facebookProvider };
