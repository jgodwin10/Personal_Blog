import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_yu6a6BZV0C2kNJ0_N3FGvr4F72w_Ojg",
  authDomain: "easypeasy-8611d.firebaseapp.com",
  projectId: "easypeasy-8611d",
  storageBucket: "easypeasy-8611d.appspot.com",
  messagingSenderId: "703124319003",
  appId: "1:703124319003:web:6874de54b905ae82cb01be",
  measurementId: "G-DB43RYBF10",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
