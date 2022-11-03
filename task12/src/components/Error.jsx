import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteById } from "../features/errorList/errorListSlice";
import "./ErrorsList.css";

export default function Error({ id, error }) {
  useEffect(() => {
    setTimeout(() => dispatch(deleteById(id)), 1500);
  });
  const dispatch = useDispatch();
  return (
    <div className="errors">
      <div className="error">{error.nombre?.message}</div>
      <div className="error">{error.apellido?.message}</div>
      <div className="error">{error.edad?.message}</div>
      <div className="error">{error.ubicacion?.message}</div>
      <div className="error">{error.mail?.message}</div>
      <button className="errorBtn" onClick={() => dispatch(deleteById(id))}>
        Delete
      </button>
    </div>
  );
}
