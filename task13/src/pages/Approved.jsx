import React from "react";
import { useSelector } from "react-redux";
import User from "../components/User";
import "./ChooseUsers.css";

export default function Approved() {
  const { approved } = useSelector((state) => state.approved);

  return (
    <div className="listUsers">
      {approved.map((user) => (
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
      ))}
    </div>
  );
}
