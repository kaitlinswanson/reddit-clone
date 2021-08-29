import React from 'react';
import './App.css';
import { hotData } from './ReaditData'




function HotReadits ({votes, increaseVotes, decreaseVotes}) { 


    

    return (
    <div className="each-post">
    {hotData.map((item) => (
  <div className="readit-posts" key={item.id}>
      <div className="posted-by">Posted by {item.poster}</div>
        <div className="title">{item.title}</div>
        <div className="layout">
        <div className="vote-holder">
        <button className="upvote" id={item.id2} onClick={() => {
                document.getElementById(item.id).innerHTML = (item.number + 1);
                document.getElementById(item.id2).style = "color: green"
                }
      }><i className="fas fa-caret-up"></i></button>
                <div className="vote-count" id={item.id}>{item.number}</div>

                <button className="downvote" id={item.id3} onClick={() => {
                document.getElementById(item.id).innerHTML = (item.number - 1);
                document.getElementById(item.id3).style = "color: red"
                }
                }><i className="fas fa-caret-down"></i></button>
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

export default HotReadits;