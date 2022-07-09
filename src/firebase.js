import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAx2v-lytMvnn2H1NXi-8rEMDnH7XTQve8",
  authDomain: "linkedin-clone-d10da.firebaseapp.com",
  projectId: "linkedin-clone-d10da",
  storageBucket: "linkedin-clone-d10da.appspot.com",
  messagingSenderId: "296079620517",
  appId: "1:296079620517:web:0f6f9ee751ee3dbf3ed04c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
