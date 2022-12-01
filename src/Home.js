import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="homeBackground">
      <h1>SVG Animations</h1>
      <div className="homeContainer">
        <div className="homeButtons">
          <Link className="button homeButton" to="./Tutorial">
            Tutorial
          </Link>
          <Link className="button" to="Exercise1">
            Exercise 1
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
