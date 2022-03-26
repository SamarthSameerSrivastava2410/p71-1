import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDNZKggnsSVKQ9-aXsPcoDOWNof2pNKCD8",
    authDomain: "e-ride-81049.firebaseapp.com",
    projectId: "e-ride-81049",
    storageBucket: "e-ride-81049.appspot.com",
    messagingSenderId: "82235902421",
    appId: "1:82235902421:web:e54cb1dd4e10fd1d2d155c"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
