// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBop0tQH0x9FAIOpNbviZqydHE8G7WrKk0",
    authDomain: "jackson-ems-website.firebaseapp.com",
    projectId: "jackson-ems-website",
    storageBucket: "jackson-ems-website.appspot.com",
    messagingSenderId: "1090523716099",
    appId: "1:1090523716099:web:129350852690e7a5f5cc36",
    measurementId: "G-MH9HS50FT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);