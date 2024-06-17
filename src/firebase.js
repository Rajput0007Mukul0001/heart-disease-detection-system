import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2kLkMbq_DGa2Wud4vdZ1Y0abCeriUbbI",
    authDomain: "detectionsystem-1e31e.firebaseapp.com",
    projectId: "detectionsystem-1e31e",
    storageBucket: "detectionsystem-1e31e.appspot.com",
    messagingSenderId: "480053008037",
    appId: "1:480053008037:web:0147ede46ff8bc53b5df4c",
    measurementId: "G-HWSR7H0D0E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth,db };
