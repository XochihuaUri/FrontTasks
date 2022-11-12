import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import { fetchUsers } from "../features/userGetAll/userGetAllSlice";
import "./ChooseUsers.css";

export default function ChooseUsers() {
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userGetAll);
  return (
    <div className="listUsers">
      {users.map((user) => (
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
          choose={true}
        />
      ))}
    </div>
  );
}
