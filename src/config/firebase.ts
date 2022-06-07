import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1KL1n3rSj0GfGpfWbJv2F0oH9SkEtMNM",
  authDomain: "grocery-app-13afb.firebaseapp.com",
  databaseURL: "https://grocery-app-13afb.firebaseio.com",
  projectId: "grocery-app-13afb",
  storageBucket: "grocery-app-13afb.appspot.com",
  messagingSenderId: "470684848645",
  appId: "1:470684848645:web:6acb11176c44fe8886c26c",
};

firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// firebase collections
export const productsCollection = db.collection("products");
export const cartCollection = db.collection("cart");

export default {
  db,
  provider,
  auth,
  productsCollection,
  cartCollection,
};
