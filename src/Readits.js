import React from 'react';
import './App.css';


function Readits() {

    return (
        <div className="readit-holder">
            <div className="readit-posts">

                <div className="posted-by">Posted by u/Funee45</div>
                <div className="title">Your perception is true. We've had 10x rainfall this year over last.</div>
                <div className="layout">
                <div className="vote-holder">
                    <button className="upvote"><i className="fas fa-caret-up"></i></button>
                    <div className="vote-count">566</div>
                    <button className="downvote"><i className="fas fa-caret-down"></i></button>
                </div>
                <div className="post-content"> 
                    <div classname="post-text"></div>
                    <img className="post-image" src="https://bloximages.newyork1.vip.townnews.com/azfamily.com/content/tncms/assets/v3/editorial/c/96/c96ba39e-015d-11ec-ae2c-c35b8d9a2917/611f12c01b2c1.image.png?resize=750%2C422" alt="valley rainfall since 1990"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Readits;