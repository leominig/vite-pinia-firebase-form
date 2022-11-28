import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDMlbcMhLcBFurv1ykgw7gB5wcTV96aPFg",
  authDomain: "pinia-firebase-4a9f8.firebaseapp.com",
  projectId: "pinia-firebase-4a9f8",
  storageBucket: "pinia-firebase-4a9f8.appspot.com",
  messagingSenderId: "927315704685",
  appId: "1:927315704685:web:bf1fc380f2822718cd3864"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth()

export { auth }