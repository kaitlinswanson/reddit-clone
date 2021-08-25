import React from 'react';
import './App.css';
import Nav from './Nav';
import Readits from './Readits';
import Notifications from './Notifications';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import firebase from "firebase/app";
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyC5GmejPDfqvVMCK19YZYq4d18Q7JYsaUM",
  authDomain: "readit-30c4a.firebaseapp.com",
  projectId: "readit-30c4a",
  storageBucket: "readit-30c4a.appspot.com",
  messagingSenderId: "187551268318",
  appId: "1:187551268318:web:f5c5a8f1753c89364cb14f"});

function signIn() {
  // Sign into Firebase using popup auth & Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

//paages to create: 
// - profile
// - notifications

// - best
// - hot 
// - new

function App() {

  //useState and useEffect here 
  //const [feed, setFeed]? 
  //JS functions 

  //upvote/downvote functions

  return (
    <Router>
    <div className="App">
      <Nav 
      signIn = {signIn}
      />
      <Switch>
        <Route exact path="/">
        <Readits


      />
        </Route>

        <Route exact path="/notifications">
          <Notifications
          />
        </Route>
      


</Switch>
    </div>

    
    </Router>

  );
}

export default App;
