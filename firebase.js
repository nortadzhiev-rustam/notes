// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2iYr4pkA4HLw_7zP_bnDc4idMJl80lM4",
  authDomain: "notes-57be5.firebaseapp.com",
  databaseURL: "https://notes-57be5-default-rtdb.firebaseio.com",
  projectId: "notes-57be5",
  storageBucket: "notes-57be5.appspot.com",
  messagingSenderId: "21141735400",
  appId: "1:21141735400:web:6a2710b0ff68d5a5da465d",
  measurementId: "G-5X7EGYMF8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);