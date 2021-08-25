import React from 'react';
import './App.css';
import Nav from './Nav';
import Readits from './Readits';
import Notifications from './Notifications';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
