// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDW4MEsAMAKVyUnjswXe2rlVxEEZBRjg_Q",
  authDomain: "note-app-6f44a.firebaseapp.com",
  projectId: "note-app-6f44a",
  storageBucket: "note-app-6f44a.appspot.com",
  messagingSenderId: "16044282075",
  appId: "1:16044282075:web:993251d76e392f158ebcfe",
  measurementId: "G-YQSBN1XX02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")