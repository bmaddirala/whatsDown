import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAO5FJgN8FaHGe38s9PjtfQqERD8Cw_8P0",
  authDomain: "whatsdown-f604a.firebaseapp.com",
  projectId: "whatsdown-f604a",
  storageBucket: "whatsdown-f604a.appspot.com",
  messagingSenderId: "372842766434",
  appId: "1:372842766434:web:294b5226969875b151b13b",
  measurementId: "G-KDSH39J0F9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
