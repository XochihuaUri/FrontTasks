import React from "react";
import { Link } from "react-router-dom";
import sloth from "../img/sloth.png";
import "./Welcome.css";
export default function Welcome() {
  return (
    <div className="welcome">
      <h1 className="welcomeTitle">Welcome to my page!</h1>
      <img
        data-testid="welcomeImg"
        src={sloth}
        alt="sloth"
        className="welcomeImg"
      />
      <Link
        to="dashboard"
        style={{
          fontSize: "2rem",
          fontWeight: "500 ",
          textDecoration: "none",
          color: "#fff",
          border: "solid 3px white",
          padding: "12px 16px",
          borderRadius: "40px",
          marginBottom: "20px",
        }}
      >
        Go to dashboard
      </Link>
    </div>
  );
}
