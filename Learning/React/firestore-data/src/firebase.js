import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJYxXuueMuq3TfcnC0EvNwwxAsOuCahFI",
    authDomain: "orexoviy-sad.firebaseapp.com",
    databaseURL: "https://orexoviy-sad-default-rtdb.firebaseio.com",
    projectId: "orexoviy-sad",
    storageBucket: "orexoviy-sad.appspot.com",
    messagingSenderId: "990091375673",
    appId: "1:990091375673:web:90f90796d4edf72625c9e8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);