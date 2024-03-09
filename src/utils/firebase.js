// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL6_TwlZkGDJ7fnn7LbY7fyGdXGcj3s3w",
  authDomain: "netflix-gpt-a424e.firebaseapp.com",
  projectId: "netflix-gpt-a424e",
  storageBucket: "netflix-gpt-a424e.appspot.com",
  messagingSenderId: "33399920623",
  appId: "1:33399920623:web:596df52c61619efdbb881a",
  measurementId: "G-JJTVWK338C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
