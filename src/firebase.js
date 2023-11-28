// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAulmCa7_Fjhyr8GBTkB-OgnSs8_WHtTx8",
  authDomain: "image-uploader-68868.firebaseapp.com",
  projectId: "image-uploader-68868",
  storageBucket: "image-uploader-68868.appspot.com",
  messagingSenderId: "889832707742",
  appId: "1:889832707742:web:3dda9501ff8088300f4d8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
