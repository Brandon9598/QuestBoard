// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCEX9rUnVQkML-pmfR5SiVdehIHS4QtsI",
  authDomain: "questboard-b978c.firebaseapp.com",
  databaseURL: "https://questboard-b978c-default-rtdb.firebaseio.com",
  projectId: "questboard-b978c",
  storageBucket: "questboard-b978c.appspot.com",
  messagingSenderId: "393232043021",
  appId: "1:393232043021:web:7dec3826c1dc3a4fbd5944",
  measurementId: "G-VJDGG1H42L"
};

// Initialize Firebase
let app;
if (firebase.apps.length > 0) {
  app = firebase.apps[0];
} else {
  app = firebase.initializeApp(firebaseConfig);
}
const auth = app.auth();
const db = app.firestore();

// Authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};