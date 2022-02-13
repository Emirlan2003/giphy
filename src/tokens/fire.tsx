import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth' 


const firebaseConfig = {
  apiKey: "AIzaSyDBOBIlUNMDbSnBMjTXiV5dq3qf0jxCmmM",
  authDomain: "giphy-2d236.firebaseapp.com",
  projectId: "giphy-2d236",
  storageBucket: "giphy-2d236.appspot.com",
  messagingSenderId: "585176712696",
  appId: "1:585176712696:web:39f1685b9559663368c20d"
};

// const app = initializeApp(firebaseConfig);
const fire = firebase.initializeApp(firebaseConfig);




export default fire;

