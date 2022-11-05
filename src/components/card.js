import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <h3 className="card--availability">SOLD OUT</h3>
        <img src={require(`../images/${props.img}`)} alt="not working"></img>
      </div>
      <div className="card--rating">
        <img src={star}></img>
        <p className="card--dark-text">{props.rating}</p>
        <p className="card--light-text">
          ({props.reviewCount}) &middot; {props.country}
        </p>
      </div>
      <p className="card--desc">{props.title}</p>
      <div className="card--price">
        <h5>From ${props.price}</h5>
      </div>
    </div>
  );
}
