import React from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";

export default function DashBoard() {
  return (
    <div className="dashboard">
      <div className="dashboardTitle">Dash board</div>
      <div className="principalContainer">
        <div className="left">
          <div className="btn">Button</div>
          <div className="btn">Button</div>
          <div className="btn">Button</div>
          <div className="btn">Button</div>
          <div className="btn">Button</div>
        </div>
        <div className="right">right</div>
      </div>
      <Link
        to="/"
        style={{
          fontSize: "2rem",
          fontWeight: "500 ",
          textDecoration: "none",
          color: "#fff",
          border: "solid 3px white",
          padding: "6px 16px",
          borderRadius: "40px",
          marginTop: "20px",
        }}
      >
        Go home
      </Link>
    </div>
  );
}
