import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./Error.css";
import dog from "../img/cat.png";

export default function Error() {
  let error = useRouteError();
  return (
    <div className="error">
      <div className="errorTitle">
        {error.status} - {error.statusText}
      </div>
      <img src={dog} alt="sloth" className="errorImg" />
      <Link
        to="/"
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
        Go home
      </Link>
    </div>
  );
}
