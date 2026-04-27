// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, where, onSnapshot, addDoc, deleteDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC89TjMlrtfh88o_HDgCHD42hAvXMZ6fQM",
  authDomain: "afnan-49d21.firebaseapp.com",
  projectId: "afnan-49d21",
  storageBucket: "afnan-49d21.firebasestorage.app",
  messagingSenderId: "886430112619",
  appId: "1:886430112619:web:278b9ea777f4dda77b0a2e",
  measurementId: "G-EWMJ8ZPY7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { 
    auth, 
    db, 
    googleProvider, 
    twitterProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    deleteDoc,
    getDocs
};
