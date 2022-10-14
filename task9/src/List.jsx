import React from "react";
import "./List.css";

export default function List(props) {
  let list = props.array;
  return (
    <ul className="list">
      {list.map((item) => {
        return <li className="listItem">{item}</li>;
      })}
    </ul>
  );
}
