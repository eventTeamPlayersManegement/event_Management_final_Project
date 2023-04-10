// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqllpwFdJHol0Sa_CIlLgUOaFXsSIDI9s",
  authDomain: "event-3446a.firebaseapp.com",
  projectId: "event-3446a",
  storageBucket: "event-3446a.appspot.com",
  messagingSenderId: "948932834897",
  appId: "1:948932834897:web:52291d35921f9128a72a70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
