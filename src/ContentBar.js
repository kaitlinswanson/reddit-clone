import React from 'react';
import './App.css';


function ContentBar() { 

    return (
        <div>
        <nav className="content-bar">
        <button className="content-buttons" id="best"><i className="fas fa-rocket"></i> Best</button>
        <button className="content-buttons" id="hot"><i className="fas fa-burn"></i> Hot</button>
        <button className="content-buttons" id="new"><i class="fas fa-certificate"></i> New</button>
        </nav>
        </div>
    )
}


export default ContentBar;