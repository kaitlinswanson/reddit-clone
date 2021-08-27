import React from 'react';
import './App.css';
import Readit from './Readit'


function Readits({votes, increaseVotes, decreaseVotes}) {

    return (

        <div className="readit-holder">
        <Readit 
        votes={votes}
        increaseVotes={increaseVotes}
        decreaseVotes={decreaseVotes}
        />
        </div>

        /*
        <div className="readit-holder">
            <div className="readit-posts">
                <div className="posted-by">Posted by u/Funee45</div>
                <div className="title">Your perception is true. We've had 10x rainfall this year over last.</div>
                <div className="layout">
                <div className="vote-holder">
                    <button className="upvote" onClick={increaseVotes}><i className="fas fa-caret-up"></i></button>
                    <div className="vote-count">{votes}</div>
                    <button className="downvote" onClick={decreaseVotes}><i className="fas fa-caret-down"></i></button>
                </div>
                <div className="post-content"> 
                    <div className="post-text"></div>
                    <img className="post-image" src="https://bloximages.newyork1.vip.townnews.com/azfamily.com/content/tncms/assets/v3/editorial/c/96/c96ba39e-015d-11ec-ae2c-c35b8d9a2917/611f12c01b2c1.image.png?resize=750%2C422" alt="valley rainfall since 1990"></img>
                    </div>
                </div>
                <div className="bottom-bar">
                    <button className="comments"><i className="far fa-comment-alt"></i></button>
                    <button className="awards"><i className="fas fa-gift"></i></button>
                    <button className="share"><i class="fas fa-share"></i></button>
                    </div>
            </div>

            <div className="readit-posts">
                <div className="posted-by">Posted by u/Doghair221
                </div>
                <div className="title">These comments are getting out of hand.</div>
                
                <div className="layout">
                <div className="vote-holder">
                    <button className="upvote"><i className="fas fa-caret-up"></i></button>
                    <div className="vote-count">210</div>
                    <button className="downvote"><i className="fas fa-caret-down"></i></button>
                </div>
                <div className="post-content"> 
                    
                    <img className="post-image" src="https://preview.redd.it/uktfx1iiscj71.jpg?width=640&height=652&crop=smart&auto=webp&s=278b5ede49bb45b2728b146d7e9a6f5f5322bc5c" alt="comment section meme"></img>
                    </div>
                </div>
                <div className="bottom-bar">
                    <button className="comments"><i className="far fa-comment-alt"></i></button>
                    <button className="awards"><i className="fas fa-gift"></i></button>
                    <button className="share"><i class="fas fa-share"></i></button>
                    </div>
            </div>

            <div className="readit-posts">
                <div className="posted-by">Posted by u/throwaway212134
                </div>
                <div className="title">First time cutting my natural hair...Should I straighten it?</div>
                <div className="layout">
                <div className="vote-holder">
                    <button className="upvote"><i className="fas fa-caret-up"></i></button>
                    <div className="vote-count">110</div>
                    <button className="downvote"><i className="fas fa-caret-down"></i></button>
                </div>
                <div className="post-content"> 
                    <div className="post-text">
                    I want to get a trim/cut bc i have dead ends and my natural hair lacks shape. 
                    I walked into a salon that told me they had to straighten it in order to cut it. I was hesitant about putting heat on 
                    it plus wanted to do more research before i mess up my hair and leave the salon crying. 
                    I would think if i was going to always be wearing my hair natural then i shouldn’t have to straighten it to cut it. 
                    I’ve never done this before so i could be wrong, i just wanted to make sure this was correct and not a stylist just 
                    trying to make her life easier.
                    </div>
                    
                    </div>
                </div>
                <div className="bottom-bar">
                    <button className="comments"><i className="far fa-comment-alt"></i></button>
                    <button className="awards"><i className="fas fa-gift"></i></button>
                    <button className="share"><i class="fas fa-share"></i></button>
                    </div>
            </div>
            <div className="readit-posts">
                <div className="posted-by">Posted by u/notmyaccount8347
                </div>
                <div className="title">He's speaking the truth!</div>
                <div className="layout">
                <div className="vote-holder">
                    <button className="upvote"><i className="fas fa-caret-up"></i></button>
                    <div className="vote-count">980</div>
                    <button className="downvote"><i className="fas fa-caret-down"></i></button>
                </div>
                <div className="post-content"> 
                <img className="post-image" src="https://preview.redd.it/fnbckmu1jvi71.jpg?width=640&height=477&crop=smart&auto=webp&s=516a38085f6b9028fdeadc8d9321c3cda6446c69" alt="embarrassment is ok meme"></img>
                    
                    </div>
                </div>
                <div className="bottom-bar">
                    <button className="comments"><i className="far fa-comment-alt"></i></button>
                    <button className="awards"><i className="fas fa-gift"></i></button>
                    <button className="share"><i class="fas fa-share"></i></button>
                    </div>
            </div>
        </div> */
    )
}

export default Readits;