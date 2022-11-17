import React from "react";
import { Link } from "react-router-dom";
import "./DashBoard.css";

export default function DashBoard() {
  return (
    <div className="dashboard">
      <div className="dashboardTitle">Dash board</div>
      <Link
        to="/choose"
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
        Go choose
      </Link>
      <Link
        to="/search"
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
        Go search
      </Link>
      <Link
        to="/create"
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
        Go create
      </Link>
      <Link
        to="/approve"
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
        Go approve
      </Link>
      <Link
        to="/reject"
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
        Go reject
      </Link>

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
