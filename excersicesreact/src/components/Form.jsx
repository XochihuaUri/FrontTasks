import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const uniqueId = () => {
  return Math.floor(Math.random() * Date.now());
};

export default function Form({ dataUser, setDataUser }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data, id: uniqueId() };
    setDataUser([...dataUser, newData]);
  };

  console.log(dataUser);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register("name")} className="input" />
        <input {...register("lastName")} className="input" />
        <input {...register("age")} className="inputAge" />
        <input {...register("country")} className="inputCountry" />
        <input type="submit" className="inputSubmit" />
      </form>
    </div>
  );
}
