import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAooXI-FHvzNuT32FP7csswTJtEGimtEYc",
    authDomain: "dev-challenge-workspace.firebaseapp.com",
    projectId: "dev-challenge-workspace",
    storageBucket: "dev-challenge-workspace.appspot.com",
    messagingSenderId: "629399812067",
    appId: "1:629399812067:web:bc1aeafef5495df60892d6",
    measurementId: "G-Z6C88WE8B1"
};

export const app = firebase.initializeApp(firebaseConfig);
export const firebaseStorage = app.storage();
export const firebaseFirestore = app.firestore();