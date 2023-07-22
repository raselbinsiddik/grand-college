// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdTvhvM9-rUmq4mWQV3g4p8-WX446q-BY",
  authDomain: "grand-college.firebaseapp.com",
  projectId: "grand-college",
  storageBucket: "grand-college.appspot.com",
  messagingSenderId: "1001262902511",
  appId: "1:1001262902511:web:ca7f85be68d6b64bebbf1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;