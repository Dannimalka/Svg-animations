import React from "react";
import Moon from "./Moon";
import "./Exercise1.css";
import Rocket from "./Rocket";
import { Link } from "react-router-dom";

function Exercise1() {
  return (
    <div className="exerciseContainer">
      <h1>Exercise number: 1</h1>
      <h2>Animate the rocket how you feel like</h2>
      <p>
        Hint Hint you can use transform: rotate(XXdeg); if you want to just
        rotate the Rocket
      </p>
      <Moon />
      <Rocket />
      <Link className="button exerciseButton" to="/">
        Back Home
      </Link>
    </div>
  );
}

export default Exercise1;
