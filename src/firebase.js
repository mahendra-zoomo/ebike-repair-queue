import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvlaAaXnFkqUuL6iPBtcYs8SB-MXTvKYc",
  authDomain: "ebike-repair-queue.firebaseapp.com",
  projectId: "ebike-repair-queue",
  storageBucket: "ebike-repair-queue.firebasestorage.app",
  messagingSenderId: "1094481120459",
  appId: "1:1094481120459:web:7fc37b680ae5e862b69f4e",
  measurementId: "G-CN1JT1DC7T", // Optional, can be removed
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };