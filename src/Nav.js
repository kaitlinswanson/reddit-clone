import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() { 

//JS here

    return (
        <nav className="Nav">
            <Link id="home-link" to='/'>
            <h2><i id="face" className="fas fa-grin"></i> readit</h2>
            </Link>
            <input id="searchbar" type="text" placeholder="Search..."></input>
            <ul className="nav-links">
            <Link id="login" to='/login'>
                    <li>Log In</li>
                </Link>
                <Link id="signup" to='/signup'>
                    <li>Sign Up</li>
                </Link>
                <Link id="notifications" to='/notifications'>
                    <li><i className="far fa-bell"></i></li>
                </Link>
                <Link id="profile" to='/profile'>
                    <li><i className="far fa-user"></i></li>
                </Link>
            </ul>
        </nav>
      );
    }
    
    export default Nav;



