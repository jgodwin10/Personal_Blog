import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDPox5jfg_IRP5ded75QeBhp9j20WWFfpw",
  authDomain: "easypeasy-6cd0a.firebaseapp.com",
  projectId: "easypeasy-6cd0a",
  storageBucket: "easypeasy-6cd0a.appspot.com",
  messagingSenderId: "68334527588",
  appId: "1:68334527588:web:0d3581e533f8e21ece6b71",
  measurementId: "G-5T21RGFW1M",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
