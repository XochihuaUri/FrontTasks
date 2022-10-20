import "./Plane.css";
import React from "react";

export default function Plane(props) {
  return (
    <div className="PlaneCard">
      <p className="PlaneName">Model: {props.plane}</p>
      <p className="PlanePrice">Cost per flight hour (USD): {props.cost}</p>
      <img className="PlaneImg" src={props.img} alt="planeImg"></img>
    </div>
  );
}
