
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASXyRU5Mzc1Qexiqid8o7pxy0b6tkFEo0",
  authDomain: "cloud-note-sapp.firebaseapp.com",
  projectId: "cloud-note-sapp",
  storageBucket: "cloud-note-sapp.firebasestorage.app",
  messagingSenderId: "78417145667",
  appId: "1:78417145667:web:875215b5a48895bfc089f6",
  measurementId: "G-Q3FWF2YEMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
