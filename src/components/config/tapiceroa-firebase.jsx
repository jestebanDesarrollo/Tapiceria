import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDjlMJwoaD_2MTIBIaTWcvTRSYSceXpe44",
    authDomain: "tapiceriajem.firebaseapp.com",
    projectId: "tapiceriajem",
    storageBucket: "tapiceriajem.appspot.com",
    messagingSenderId: "221373856769",
    appId: "1:221373856769:web:eb4b3e5c1785de15769400",
    measurementId: "G-4EF1YEKP8H"
  };

  const app = initializeApp(firebaseConfig);
  export const dataBase = getFirestore(app)