import React from 'react';
import './App.css';

import { readitData } from './ReaditData'; 

//may end up using useEffect to change 'clicked' vs 'unclicked' for the +1 button on the readit votes
//TODO: make them change independently. 

function Readit({votes, increaseVotes, decreaseVotes}) {



return (
    
    <div className="each-post">
    {readitData.map((item) => (
  <div className="readit-posts" key={item.id}>
      <div className="posted-by">Posted by {item.poster}</div>
        <div className="title">{item.title}</div>
        <div className="layout">
        <div className="vote-holder">
            <button className="upvote" onClick={() => {
                document.getElementById(item.id).innerHTML = (item.number + 1);
                }
      }><i className="fas fa-caret-up"></i></button>
                <div className="vote-count" id={item.id}>{votes + (item.number)}</div>
                <button className="downvote" onClick={decreaseVotes}><i className="fas fa-caret-down"></i></button>
            </div>
        <div className="post-content"> 
            <div className="post-text">{item.text}</div>
            <img className="post-image" src={item.img} alt={item.alt}></img>
        </div>
    </div>
    <div className="bottom-bar">
                    <button className="comments"><i className="far fa-comment-alt"></i></button>
                    <button className="awards"><i className="fas fa-gift"></i></button>
                    <button className="share"><i class="fas fa-share"></i></button>
        </div>
        </div>
            )
        )}
    </div>
    
    );
}

export default Readit