import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7YRi2MQA4NLjRbQQ5JWPGmvhAN9bFhCE",
  authDomain: "nemograme.firebaseapp.com",
  projectId: "nemograme",
  storageBucket: "nemograme.appspot.com",
  messagingSenderId: "459489502975",
  appId: "1:459489502975:web:bd14d38056d03230198eca",
  measurementId: "G-DYCPZ0NKR4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
