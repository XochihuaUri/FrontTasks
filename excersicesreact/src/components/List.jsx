import React from "react";
import Item from "./Item";

export default function List({ dataUser, setDataUser, deleteItem }) {
  return (
    <div className="listContainer">
      {dataUser.map((user, id) => {
        return <Item key={id} user={user} deleteItem={deleteItem} />;
      })}
    </div>
  );
}
