import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();
const provider = new firebase.auth.FacebookAuthProvider();
const auth = firebase.auth();

// firebase collections
export const productsCollection = db.collection("products");
export const cartCollection = db.collection("cart");

export default {
  db,
  provider,
  auth,
  productsCollection,
  cartCollection
};
