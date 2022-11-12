import React from "react";
import { useSelector } from "react-redux";
import User from "../components/User";

export default function Reject() {
  const { rejected } = useSelector((state) => state.rejected);

  return (
    <div className="listUsers">
      {rejected.map((user) => (
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
