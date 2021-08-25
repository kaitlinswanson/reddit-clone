
import firebase from 'firebase/app'
import 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
firebase.initializeApp({
  apiKey: "AIzaSyC5GmejPDfqvVMCK19YZYq4d18Q7JYsaUM",
  authDomain: "readit-30c4a.firebaseapp.com",
  projectId: "readit-30c4a",
  storageBucket: "readit-30c4a.appspot.com",
  messagingSenderId: "187551268318",
  appId: "1:187551268318:web:f5c5a8f1753c89364cb14f"});



export default firebase;
export const auth = firebase.auth();

