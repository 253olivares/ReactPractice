// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore} from 'firebase/firestore';

// importing our googleAutheticator and authentication functions that we will use to allow us to sign up on our dashboard and upload documents 
// on the database that will show on our portfolio page
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// our connection info taken from firebase. After creating a database for our project firebase will provide us with credentials that will be
// used to connect to the application 
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
// we create a new app variable that will be responsible for connecting us. This function stored in our node
// module will connect us to the server every time we call app by passing our firebaseConfig object which has all our keys
// and information needed to connect to the server
const app = initializeApp(firebaseConfig);
// analytics is a variable create to get server status for right now we wont be using this function
const analytics = getAnalytics(app);

// Auth variable that will all us fetch our application authentication token and information whenever we are logged in
export const auth = getAuth();

// creating a new oject instance of GoogleAuthProvider using a class and storing it as provider that we will pass along later
const provider = new GoogleAuthProvider();

// our db connection variable. db called getFirestore that we will use later to connect to our database by passing its name 
export const db = getFirestore(app);
// getStorage will fulfill that same function on difference is it reaches into our cloud storage. 
export const storage = getStorage(app);

// create a function that will activate a signIn pop up box using our authetication variable that will store login information 
// once we login with our provider. In this case we are using googlesAutheticationProvider 
export const signInWithGoogle = () => signInWithPopup(auth, provider);