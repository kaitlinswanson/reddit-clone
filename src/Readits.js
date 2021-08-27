import React from 'react';
import './App.css';
import Readit from './Readit'
import ContentBar from './ContentBar'


function Readits({votes, increaseVotes, decreaseVotes}) {

    return (
            
        <div className="readit-holder">
            <ContentBar/>
        <Readit 
        votes={votes}
        increaseVotes={increaseVotes}
        decreaseVotes={decreaseVotes}
        />
        </div>
        
        
    )
}

export default Readits;