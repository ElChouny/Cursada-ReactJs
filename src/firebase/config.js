import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYQpq_s6vGnmOpssr4YYC-7Pl3HDtRPHo",
    authDomain: "proyecto-reactjs-cb452.firebaseapp.com",
    projectId: "proyecto-reactjs-cb452",
    storageBucket: "proyecto-reactjs-cb452.appspot.com",
    messagingSenderId: "956452884479",
    appId: "1:956452884479:web:89638216c354c21ee4a1ca"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);