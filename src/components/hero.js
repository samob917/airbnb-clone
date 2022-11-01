import React from "react";
import groupimage from "../images/Group 77.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={groupimage}></img>
      <div className="hero--words">
        <h1>Online Experience</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
