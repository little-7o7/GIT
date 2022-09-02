import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJYxXuueMuq3TfcnC0EvNwwxAsOuCahFI",
  authDomain: "orexoviy-sad.firebaseapp.com",
  databaseURL: "https://orexoviy-sad-default-rtdb.firebaseio.com",
  projectId: "orexoviy-sad",
  storageBucket: "orexoviy-sad.appspot.com",
  messagingSenderId: "990091375673",
  appId: "1:990091375673:web:2a6589b42c36a36425c9e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
