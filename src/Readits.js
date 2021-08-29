import React from 'react';
import './App.css';
import Readit from './Readit'
import ContentBar from './ContentBar'
import HotReadits from './HotReadits'
import NewReadits from './NewReadits'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function Readits() {

    return (
        <Router>
        <div className="readit-holder">
            <ContentBar/>
            <Switch>
            <Route  exact path="/">
        <Readit 
        
        />
        </Route>
        <Route exact path="/hot">
        <HotReadits
        
        />
        </Route>
        <Route exact path="/new">
        <NewReadits
        
        />
        </Route>
        </Switch>
        </div>
        </Router>
        
    )
}

export default Readits;