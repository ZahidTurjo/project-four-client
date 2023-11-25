// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEJXKuYhGLVm-SzTSQNXU8np-F687teGc",
  authDomain: "stay-vista-be485.firebaseapp.com",
  projectId: "stay-vista-be485",
  storageBucket: "stay-vista-be485.appspot.com",
  messagingSenderId: "388607332721",
  appId: "1:388607332721:web:9a38b36389075cab87a6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app