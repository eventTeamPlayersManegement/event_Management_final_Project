// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd1tAH7RddOCtmjbsjpRj1DSUPHSnkGYE",
  authDomain: "finalpro-46b1b.firebaseapp.com",
  projectId: "finalpro-46b1b",
  storageBucket: "finalpro-46b1b.appspot.com",
  messagingSenderId: "284473701719",
  appId: "1:284473701719:web:047e1a35b57ec6cff4ba12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
