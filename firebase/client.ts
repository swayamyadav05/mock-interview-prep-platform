// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBItTVo_ZBIlUln__Z11MVqKJ2mdeojt0A",
    authDomain: "prepwise-6e2ab.firebaseapp.com",
    projectId: "prepwise-6e2ab",
    storageBucket: "prepwise-6e2ab.firebasestorage.app",
    messagingSenderId: "955939438274",
    appId: "1:955939438274:web:43c84730e416bdbfec855b",
    measurementId: "G-BQ9HF2GZP1",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
