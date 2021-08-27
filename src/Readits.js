import React from 'react';
import './App.css';
import Readit from './Readit'
import ContentBar from './ContentBar'
import HotReadits from './HotReadits'
import NewReadits from './NewReadits'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function Readits({votes, increaseVotes, decreaseVotes}) {

    return (
        <Router>
        <div className="readit-holder">
            <ContentBar/>
            <Switch>
            <Route  exact path="/">
        <Readit 
        votes={votes}
        increaseVotes={increaseVotes}
        decreaseVotes={decreaseVotes}
        />
        </Route>
        <Route exact path="/hot">
        <HotReadits
        votes={votes}
        increaseVotes={increaseVotes}
        decreaseVotes={decreaseVotes}
        />
        </Route>
        <Route exact path="/new">
        <NewReadits
        votes={votes}
        increaseVotes={increaseVotes}
        decreaseVotes={decreaseVotes}
        />
        </Route>
        </Switch>
        </div>
        </Router>
        
    )
}

export default Readits;