// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs_XWsG9hPuZFYJat5eo7F4L1O-7CIFns",
  authDomain: "netflixcloneproject-50b2e.firebaseapp.com",
  projectId: "netflixcloneproject-50b2e",
  storageBucket: "netflixcloneproject-50b2e.appspot.com",
  messagingSenderId: "980558193985",
  appId: "1:980558193985:web:866887ada5e61279842dc0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
