// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxVgBSC5a6iC_lEGsHRF0mu-bhNAP3IFE",
  authDomain: "module-59-f24d3.firebaseapp.com",
  projectId: "module-59-f24d3",
  storageBucket: "module-59-f24d3.appspot.com",
  messagingSenderId: "616999087429",
  appId: "1:616999087429:web:279bb8cbf9484c8386622c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
