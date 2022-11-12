import React from "react";
import { useDispatch } from "react-redux";
import { pushApprovedUser } from "../features/approved/approvedSlice";
import { pushRejectedUser } from "../features/rejected/rejectedSlice";
import { deleteUserById } from "../features/userGetAll/userGetAllSlice";
import "./User.css";

export default function User({
  id,
  name,
  username,
  company,
  phone,
  address,
  website,
  user,
  choose,
}) {
  const dispatch = useDispatch();

  const approve = () => {
    dispatch(pushApprovedUser(user));
    dispatch(deleteUserById(id));
  };

  const reject = () => {
    dispatch(pushRejectedUser(user));
    dispatch(deleteUserById(id));
  };
  return (
    <div className="userCard">
      <div className="title">User</div>
      {name ? <div className="fieldTitle">Name:</div> : null}
      {name ? <div className="fieldText">{name}</div> : null}

      {username ? <div className="fieldTitle">User name:</div> : null}
      {username ? <div className="fieldText">{username} </div> : null}

      {phone ? <div className="fieldTitle">Phone: </div> : null}
      {phone ? <div className="fieldText">{phone}</div> : null}

      {website ? <div className="fieldTitle">Website: </div> : null}
      {website ? <div className="fieldText">{website}</div> : null}

      {company ? (
        <div>
          <div className="fieldTitle">Company name: </div>
          <div className="fieldText">{company.name}</div>
          <div className="fieldTitle">Company catch phrase: </div>
          <div className="fieldText">{company.catchPhrase}</div>
        </div>
      ) : null}

      {address ? (
        <div>
          <div className="fieldTitle">City: </div>
          <div className="fieldText">{address.city}</div>
          <div className="fieldTitle">Zip code: </div>
          <div className="fieldText">{address.zipcode} </div>
          <div className="fieldTitle">Street: </div>
          <div className="fieldText">{address.street}</div>
        </div>
      ) : null}

      {choose ? (
        <div className="buttonsContainer">
          <button className="buttonApprove" onClick={approve}>
            Approve
          </button>
          <button className="buttonReject" onClick={reject}>
            Reject
          </button>
        </div>
      ) : null}
    </div>
  );
}
