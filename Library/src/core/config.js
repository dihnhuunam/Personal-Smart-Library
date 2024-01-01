// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0ucoI2xvcV32FNdwaTimLbPKYahn5IfI",
  authDomain: "library-2e09f.firebaseapp.com",
  projectId: "library-2e09f",
  storageBucket: "library-2e09f.appspot.com",
  messagingSenderId: "720007325851",
  appId: "1:720007325851:web:3fa60395394f1e11a9fe3e",
  measurementId: "G-QR44BTQCTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);