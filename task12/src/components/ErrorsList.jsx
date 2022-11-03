import React from "react";
import "./ErrorsList.css";
import Error from "./Error";
import { useSelector } from "react-redux";

export default function ErrorsList() {
  const errors = useSelector((state) => state.errors);
  return (
    <div className="errorContainer">
      {errors.errors.map((error, index) => {
        return <Error key={index} id={error.id} error={error} />;
      })}
    </div>
  );
}
