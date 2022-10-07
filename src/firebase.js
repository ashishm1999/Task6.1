import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyA0L3QFAeZEUJPRUQlJ85xoh1IY_jJl5Jg",
  authDomain: "devdeakin-4f5b8.firebaseapp.com",
  projectId: "devdeakin-4f5b8",
  storageBucket: "devdeakin-4f5b8.appspot.com",
  messagingSenderId: "1025247527922",
  appId: "1:1025247527922:web:b3ae54c6a666bf2dd3e16b",
  measurementId: "G-9JSQS1DB8V"
};



const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const storage = getStorage(app);
export default getFirestore();
export {auth, storage}
