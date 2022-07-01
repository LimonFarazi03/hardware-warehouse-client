// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZaCF4nZlnShBUCpkH92vGBbQCfTusDZ4",
  authDomain: "assaintment-12.firebaseapp.com",
  projectId: "assaintment-12",
  storageBucket: "assaintment-12.appspot.com",
  messagingSenderId: "942493036617",
  appId: "1:942493036617:web:6886f81a8c1a4b809ccf98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;