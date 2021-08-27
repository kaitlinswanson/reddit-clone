import React from 'react';
import './App.css';
import { newData } from './ReaditData'




function NewReadits ({votes, increaseVotes, decreaseVotes}) { 

    return (
    <div className="each-post">
    {newData.map((item) => (
  <div className="readit-posts" key={item.id}>
      <div className="posted-by">Posted by {item.poster}</div>
        <div className="title">{item.title}</div>
        <div className="layout">
        <div className="vote-holder">
            <button className="upvote" onClick={increaseVotes}><i className="fas fa-caret-up"></i></button>
                <div className="vote-count">{item.number}</div>
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

export default NewReadits;