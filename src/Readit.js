import React from 'react';
import './App.css';

import { readitData } from './ReaditData'; 


function Readit({votes, increaseVotes, decreaseVotes}) {



return (
    <div>
    <div>
    {readitData.map((item) => (
  <div className="readit-posts" key={item.id}>
    <h1>{item.title}</h1>
        <h3>{item.alt}</h3>
        </div>
    ))}

        
    </div>
    </div>
  );
}

export default Readit