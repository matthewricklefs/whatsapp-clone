import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmARgd6HDYTTJSHTMHiPkG02w1Uqrt8lo",
  authDomain: "whatsapp-clone-425ae.firebaseapp.com",
  projectId: "whatsapp-clone-425ae",
  storageBucket: "whatsapp-clone-425ae.appspot.com",
  messagingSenderId: "632281582223",
  appId: "1:632281582223:web:7d30ff12e9734ea5fb7efa",
};

// set up access to firebase database
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
