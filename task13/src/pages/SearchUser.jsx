import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import { fetchUserDelete } from "../features/userDelete/userDeleteSlice";
import { fetchUserById } from "../features/userGetId/userGetIdSlice";
import "./SearchUser.css";

export default function SearchUser() {
  const dispatch = useDispatch();
  const { responseDelete } = useSelector((state) => state.userDelete);
  const { user } = useSelector((state) => state.userGetId);
  const deleteAction = () => {
    dispatch(fetchUserDelete(id));
  };

  const [id, setId] = useState();
  const handleId = (event) => {
    event.preventDefault();
    dispatch(fetchUserById(id));
  };
  return (
    <div className="searchContainer">
      <div className="left">
        <form className="form">
          <label className="label">
            Insert the id of the user you want to search
          </label>
          <input
            className="input"
            type="number"
            min="1"
            max="10"
            onChange={(event) => setId(event.target.value)}
          />
          <button className="buttonSearch" onClick={handleId}>
            Search
          </button>
        </form>
        {user ? (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            company={user.company}
            phone={user.phone}
            address={user.address}
            website={user.website}
            user={user}
            choose={false}
          />
        ) : null}
      </div>

      <div className="right">
        <button className="buttonSearch" onClick={deleteAction}>
          Delete
        </button>
        <div className="delete">
          {responseDelete ? JSON.stringify(responseDelete) : null}
        </div>
      </div>
    </div>
  );
}
