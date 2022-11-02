import React from "react";
import star from "../images/star.png";
import zaferes from "../images/zeferes.png";

export default function Card() {
  return (
    <div className="card">
      <div className="card--image">
        <h3 className="card--availability">SOLD OUT</h3>
        <img src={zaferes}></img>
      </div>
      <div className="card--rating">
        <img src={star}></img>
        <p className="card--dark-text">5.0</p>
        <p className="card--light-text">(6) &middot; USA</p>
      </div>
      <p className="card--desc">Life lessons with Katie Zaferes</p>
      <div className="card--price">
        <h5>From $136</h5>
        <p>/ person</p>
      </div>
    </div>
  );
}
