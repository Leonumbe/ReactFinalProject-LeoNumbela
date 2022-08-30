// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbuShKJUxEPEWQvY8QRbrVivLU30WevWM",
  authDomain: "react-bakerteam.firebaseapp.com",
  projectId: "react-bakerteam",
  storageBucket: "react-bakerteam.appspot.com",
  messagingSenderId: "497691082",
  appId: "1:497691082:web:566db4ea0ddabf20f08733",
  measurementId: "G-51MXCWWZXF"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
const analytics = getAnalytics(app);

export default firestoreDB;