import "./Form.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAnError } from "../features/errorList/errorListSlice";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const uniqueId = () => Math.floor(Math.random() * Date.now());
  const dispatch = useDispatch();
  const onSubmit = (data) => console.log(data);
  const onError = (errors) =>
    dispatch(addAnError({ ...errors, id: uniqueId() }));

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="form">
      <input
        {...register("nombre", {
          maxLength: { value: 20, message: "Nombre demasiado largo" },
          required: { value: true, message: "El campo nombre es obligatorio" },
        })}
        placeholder="Inserte su nombre"
        className="principalInput"
      />
      <input
        {...register("apellido", {
          maxLength: {
            value: 20,
            message: "Nombre apellido es demasiado largo",
          },
          required: {
            value: true,
            message: "El campo apellido es obligatorio",
          },
        })}
        placeholder="Inserte su apellido"
        className="principalInput"
      />
      <input
        {...register("edad", {
          min: { value: 0, message: "Debe tener una edad mayor a cero años" },
          max: { value: 130, message: "Debe tener una edad menor a 130 años" },
          required: { value: true, message: "El campo edad es obligatorio" },
          valueAsNumber: true,
        })}
        placeholder="Inserte su edad"
        className="principalInput"
      />
      <input
        {...register("ubicacion", {
          maxLength: { value: 40, message: "Ubicación demasiada larga" },
          required: {
            value: true,
            message: "El campo ubicacion es obligatorio",
          },
        })}
        placeholder="Inserte su ubicación"
        className="principalInput"
      />
      <input
        {...register("mail", {
          maxLength: { value: 40, message: "Mail demasiado largo" },
          required: { value: true, message: "El campo mail es obligatorio" },
        })}
        placeholder="Inserte su e-mail"
        className="principalInput"
      />

      <input type="submit" className="formBtn" />
    </form>
  );
}
