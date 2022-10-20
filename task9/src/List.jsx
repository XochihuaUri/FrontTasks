import React from "react";
import "./List.css";

export default function List(props) {
  let list = props.array;
  return (
    <ul className="list">
      {list.map((item, index) => {
        return (
          <li className="listItem" key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
