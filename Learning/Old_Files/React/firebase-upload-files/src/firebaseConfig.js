import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD5oI5UaTwwGNZV_IT5INeXl6xYQHBM2EE",
    authDomain: "upload-files-with-react-e7ce2.firebaseapp.com",
    projectId: "upload-files-with-react-e7ce2",
    storageBucket: "upload-files-with-react-e7ce2.appspot.com",
    messagingSenderId: "868857041612",
    appId: "1:868857041612:web:ebf2ea572a31fb712d2869"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);