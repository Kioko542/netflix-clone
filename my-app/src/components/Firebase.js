import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDs_XWsG9hPuZFYJat5eo7F4L1O-7CIFns",
  authDomain: "netflixcloneproject-50b2e.firebaseapp.com",
  projectId: "netflixcloneproject-50b2e",
  storageBucket: "netflixcloneproject-50b2e.appspot.com",
  messagingSenderId: "980558193985",
  appId: "1:980558193985:web:866887ada5e61279842dc0"
};

// const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)