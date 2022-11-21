import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwZJkZU2wPUjpFYmBGbADw3PdUkrDwpMI",
  authDomain: "mymessenger-42308.firebaseapp.com",
  databaseURL: "https://mymessenger-42308-default-rtdb.firebaseio.com",
  projectId: "mymessenger-42308",
  storageBucket: "mymessenger-42308.appspot.com",
  messagingSenderId: "125769278743",
  appId: "1:125769278743:web:d8a48fbb0988de660b8352",
  measurementId: "G-0NMPW6SM5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
