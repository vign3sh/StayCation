// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyCb4r7oqgDjnME3zft-HeyJLFY4q2Mr4",
  authDomain: "travel-2dba9.firebaseapp.com",
  projectId: "travel-2dba9",
  storageBucket: "travel-2dba9.appspot.com",
  messagingSenderId: "141667564585",
  appId: "1:141667564585:web:cb7bdd370a40323a943038"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
