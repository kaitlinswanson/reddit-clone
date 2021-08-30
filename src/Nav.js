import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

//function that brings up login when clicked on login

function Nav({ signIn }) {
  //JS here

  return (
    <nav className="Nav">
      <Link id="home-link" to="/">
        <h2>
          <i id="face" className="fas fa-grin"></i> readit
        </h2>
      </Link>
      <input id="searchbar" type="text" placeholder="Search..."></input>
      <ul className="nav-links">
        <button id="login" onClick={signIn}>
          Log In
        </button>

        <li id="signup" onClick={signIn}>
          Sign Up
        </li>

        <Link id="notifications" to="/notifications">
          <li>
            <i className="far fa-bell"></i>
          </li>
        </Link>
        <Link id="profile" to="/profile">
          <li>
            <i className="far fa-user"></i>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
