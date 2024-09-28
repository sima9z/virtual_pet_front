// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClF3gsIaJS-goQcTs6F1CNTMfxyu_1nyo",
  authDomain: "virtualpet-5e946.firebaseapp.com",
  projectId: "virtualpet-5e946",
  storageBucket: "virtualpet-5e946.appspot.com",
  messagingSenderId: "121658404968",
  appId: "1:121658404968:web:e250082b485a2c08cd8bdd",
  measurementId: "G-7VNBNEVE27"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };