import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ContentBar() {
  function highlightHotButton() {
    document.getElementById("best").style.backgroundColor = "transparent";
    document.getElementById("new").style.backgroundColor = "transparent";
    document.getElementById("hot").style.backgroundColor =
      "rgba(202, 199, 199, 0.479)";
  }

  function highlightNewButton() {
    document.getElementById("best").style.backgroundColor = "transparent";
    document.getElementById("new").style.backgroundColor =
      "rgba(202, 199, 199, 0.479)";
    document.getElementById("hot").style.backgroundColor = "transparent";
  }

  function highlightBestButton() {
    document.getElementById("best").style.backgroundColor =
      "rgba(202, 199, 199, 0.479)";
    document.getElementById("new").style.backgroundColor = "transparent";
    document.getElementById("hot").style.backgroundColor = "transparent";
  }

  return (
    <nav className="content-bar">
      <Link id="best-link" to="/">
        <button
          className="content-buttons"
          id="best"
          onClick={highlightBestButton}
        >
          <i className="fas fa-rocket"></i> Best
        </button>
      </Link>
      <Link id="hot-link" to="/hot">
        <button
          className="content-buttons"
          id="hot"
          onClick={highlightHotButton}
        >
          <i className="fas fa-burn"></i> Hot
        </button>
      </Link>
      <Link id="new-link" to="/new">
        <button
          className="content-buttons"
          id="new"
          onClick={highlightNewButton}
        >
          <i className="fas fa-certificate"></i> New
        </button>
      </Link>
    </nav>
  );
}

export default ContentBar;
