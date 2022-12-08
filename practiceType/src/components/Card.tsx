import "./Card.css";
interface CardProps {
  name: string;
  age: number;
  id: number;
  handleData: (id: number) => void;
}

export default function Card({ name, age, id, handleData }: CardProps) {
  return (
    <div className="card" onClick={() => handleData(id)}>
      <div className="card-data">{name}</div>
      <div className="card-data">{age}</div>
    </div>
  );
}
