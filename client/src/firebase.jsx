
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC0xfgvwkfyVCaSXWgqvxme9lKwjTfR6aE",
  authDomain: "video-17f75.firebaseapp.com",
  projectId: "video-17f75",
  storageBucket: "video-17f75.appspot.com",
  messagingSenderId: "918878069088",
  appId: "1:918878069088:web:34d09f13d026a3913bfe05"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider=new GoogleAuthProvider()

export default app;