// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; 
import {getDatabase, ref, onValue,set} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyCAg8ow--inh1bRWxZ9LpiiSiNDFLqwAZ0",
  authDomain: "fir-auth-675ae.firebaseapp.com",
  projectId: "fir-auth-675ae",
  storageBucket: "fir-auth-675ae.appspot.com",
  messagingSenderId: "831780062351",
  appId: "1:831780062351:web:e2f90e901d561272ca9cfa"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getDatabase(FIREBASE_APP);