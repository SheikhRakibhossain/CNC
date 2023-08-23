// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwZo7Icmm351b8UD4yLz4RV3r5OMM5rJI",
  authDomain: "cnc-news-4ec31.firebaseapp.com",
  projectId: "cnc-news-4ec31",
  storageBucket: "cnc-news-4ec31.appspot.com",
  messagingSenderId: "734522688130",
  appId: "1:734522688130:web:d322071bc1a326e4c4aa9b",
  measurementId: "G-HT0L3NDLD0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;