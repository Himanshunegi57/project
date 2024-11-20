// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAC0h0ls9lfHnrBLfa3ty5oNTfuYR-omWo",
  authDomain: "easy-trip-b336b.firebaseapp.com",
  projectId: "easy-trip-b336b",
  storageBucket: "easy-trip-b336b.firebasestorage.app",
  messagingSenderId: "691752418153",
  appId: "1:691752418153:web:9523b9d67648acb35f1bf8",
  measurementId: "G-3N2L27KXD6"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

export { firebaseapp }; 