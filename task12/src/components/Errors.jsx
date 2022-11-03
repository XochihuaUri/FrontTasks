import React from "react";
import "./Errors.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteById } from "../features/errorList/errorListSlice";

export default function Errors() {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  // console.log(errors.errors[0].nombre.message);
  // console.log(errors.errors[0].nombre.type);
  return (
    <div className="errorContainer">
      {errors.errors.map((error, index) => {
        return (
          <div key={index} className="errors">
            <div className="error">{error.nombre?.message}</div>
            <div className="error">{error.apellido?.message}</div>
            <div className="error">{error.edad?.message}</div>
            <div className="error">{error.ubicacion?.message}</div>
            <div className="error">{error.mail?.message}</div>
            <button
              className="errorBtn"
              onClick={() => dispatch(deleteById(index))}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
