import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkKjAl4pHguBfYU1584L2qS-0FQDO7sbk",
  authDomain: "chat-app-13123.firebaseapp.com",
  projectId: "chat-app-13123",
  storageBucket: "chat-app-13123.appspot.com",
  messagingSenderId: "486345298242",
  appId: "1:486345298242:web:011ef4b4bde275d735f8db",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
