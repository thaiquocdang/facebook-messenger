import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCryY1vfEsVeSg5TWiMNcfYl3fbWV9tFyo",
    authDomain: "facebook-messenger-jack-dang.firebaseapp.com",
    databaseURL: "https://facebook-messenger-jack-dang.firebaseio.com",
    projectId: "facebook-messenger-jack-dang",
    storageBucket: "facebook-messenger-jack-dang.appspot.com",
    messagingSenderId: "1092215995544",
    appId: "1:1092215995544:web:c510db9dbd2037877ea4ed",
    measurementId: "G-4CFBYXT7XB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };