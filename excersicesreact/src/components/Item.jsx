import React from "react";
import "./Item.css";

export default function Item({ user, deleteItem }) {
  return (
    <div className="itemContainer">
      <p className="field">{user.name}</p>
      <p className="field">{user.lastName}</p>
      <p className="field">{user.age}</p>
      <button className="btnWatch" onClick={() => deleteItem(user.id)}>
        Delete
      </button>
    </div>
  );
}
