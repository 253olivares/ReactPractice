// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore} from 'firebase/firestore';

import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvNUJ6bVJKqBgeFwnKKZOavJ2KTt7pmbs",
  authDomain: "react-firebase-dashboard-272f6.firebaseapp.com",
  projectId: "react-firebase-dashboard-272f6",
  storageBucket: "react-firebase-dashboard-272f6.appspot.com",
  messagingSenderId: "735086336055",
  appId: "1:735086336055:web:d7b187792e2fac6f9187b2",
  measurementId: "G-XW4QZVPGFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);