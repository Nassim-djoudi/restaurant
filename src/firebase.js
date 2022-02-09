// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB0DVU8qCP7sc0Nw8jk9Zu8l0Qj00eHZKI",

  authDomain: "gericht-restaurant-project.firebaseapp.com",

  projectId: "gericht-restaurant-project",

  storageBucket: "gericht-restaurant-project.appspot.com",

  messagingSenderId: "1055807559921",

  appId: "1:1055807559921:web:08ad95ba44575f1cb37150",

  measurementId: "G-89FF9ZBVXV"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);