import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPost } from "../features/userPost/userPostSlice";
import "./CreateUser.css";

export default function CreateUser() {
  const { response } = useSelector((state) => state.userPost);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchUserPost(data));
  };

  return (
    <div className="create">
      <form className="form1" onSubmit={handleSubmit(onSubmit)}>
        <p className="titleForm">Create a user Form</p>
        <input
          className="input1"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="error">This field is required</span>}
        <input
          className="input1"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="error">This field is required</span>
        )}
        <input
          className="input1"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input
          className="input1"
          placeholder="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span className="error">This field is required</span>}
        <input
          className="input1"
          placeholder="website"
          {...register("website", { required: true })}
        />
        {errors.website && (
          <span className="error">This field is required</span>
        )}

        <input className="button1" type="submit" />
      </form>

      <div className="userCreated">
        {"User created with values: "}
        {response ? JSON.stringify(response) : null}
      </div>
    </div>
  );
}
