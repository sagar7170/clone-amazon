
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAR61AeHQC8x6gRT4a_sIdbIE1AyIVC4-s",
    authDomain: "clone-3f478.firebaseapp.com",
    projectId: "clone-3f478",
    storageBucket: "clone-3f478.appspot.com",
    messagingSenderId: "964265054004",
    appId: "1:964265054004:web:cd25f3e563acef1efedf61",
    measurementId: "G-E0Z4HQ9E52"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default firebase;
export { db, auth };
