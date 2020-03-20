import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDvkhINLktDmUUlrvWdAVyG8V98xSSr7wQ",
    authDomain: "zakatoo-56f9d.firebaseapp.com",
    databaseURL: "https://zakatoo-56f9d.firebaseio.com",
    projectId: "zakatoo-56f9d",
    storageBucket: "zakatoo-56f9d.appspot.com",
    messagingSenderId: "160066976174",
    appId: "1:160066976174:web:6dd9291f3c5dc85c25f03f",
    measurementId: "G-TF3Q58NBDG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();

export default firebase;