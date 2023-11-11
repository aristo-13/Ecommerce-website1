// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdyCh4G4Si_VVv4xkXEiRzy3O6LHe2jwA",
  authDomain: "ecommerce-2e7de.firebaseapp.com",
  projectId: "ecommerce-2e7de",
  storageBucket: "ecommerce-2e7de.appspot.com",
  messagingSenderId: "776458547000",
  appId: "1:776458547000:web:b1119aa2a71e110188dbcd",
  measurementId: "G-VHMZWPBHCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)