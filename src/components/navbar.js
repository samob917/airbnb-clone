import React from "react";
import airbnb from "../images/airbnb 1.png";

export default function Navbar() {
  return (
    <nav>
      <img src={airbnb} alt="logo not working" className="nav--logo"></img>
    </nav>
  );
}
