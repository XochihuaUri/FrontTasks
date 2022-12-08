import "./Data.css";
export interface DataProps {
  name: string;
  age: number;
  country: string;
  phone: number;
  id: number;
}

export default function Data({ name, age, country, phone, id }: DataProps) {
  return (
    <div className="data">
      <div>{name}</div>
      <div>{age}</div>
      <div>{country}</div>
      <div>{phone}</div>
      <div>{id}</div>
    </div>
  );
}
