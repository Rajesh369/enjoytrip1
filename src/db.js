import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyD1uQzZ6NWHgK-yXPDfvoF78NjyrSWqviA",
    authDomain: "enjoytrip-326b8.firebaseapp.com",
    databaseURL: "https://enjoytrip-326b8.firebaseio.com",
    projectId: "enjoytrip-326b8",
    storageBucket: "enjoytrip-326b8.appspot.com",
    messagingSenderId: "481559831595",
    appId: "1:481559831595:web:8536c1726e7b3ed368766e",
    measurementId: "G-R5Z1SEMCR3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;