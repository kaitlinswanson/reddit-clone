import React from 'react';
import './App.css';
import Nav from './Nav';
import Readits from './Readits';
import { BrowserRouter as Router} from "react-router-dom";

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
      />
      <Readits
      />

    </div>


    </Router>

  );
}

export default App;
