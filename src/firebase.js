import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDXOMQvHraw5ZTeDHTD0r34ATgjSjMRNac",
  authDomain: "imessage-clone-33415.firebaseapp.com",
  databaseURL: "https://imessage-clone-33415.firebaseio.com",
  projectId: "imessage-clone-33415",
  storageBucket: "imessage-clone-33415.appspot.com",
  messagingSenderId: "165849858769",
  appId: "1:165849858769:web:2fd42dfc8edfb0dcf9fbf0",
  measurementId: "G-NYY3REB6BL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
 