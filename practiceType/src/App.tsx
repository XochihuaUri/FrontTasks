import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import Data from "./components/Data";
const defaultObject = {
  name: "",
  age: 0,
  country: "",
  phone: 0,
  id: 0,
};

function App() {
  const [dataSelected, setDataSelected] = useState<any>(defaultObject);

  const people = [
    { name: "Edgar", age: 29, country: "México", phone: 12345678, id: 1 },
    { name: "José", age: 30, country: "Venezuela", phone: 12345678, id: 2 },
    { name: "Joaco", age: 28, country: "Argentina", phone: 12345678, id: 3 },
    { name: "Esteban", age: 23, country: "Colombia", phone: 12345678, id: 4 },
  ];

  const handleData = (id: number) => {
    const object = people.filter((a) => a.id === id);
    setDataSelected(object[0]);
  };

  return (
    <div className="App">
      <div className="list">
        {people ? (
          people.map((person) => {
            return (
              <Card
                name={person.name}
                age={person.age}
                id={person.id}
                handleData={handleData}
                key={person.id}
              />
            );
          })
        ) : (
          <div>Array void</div>
        )}
      </div>

      <Data
        name={dataSelected.name}
        age={dataSelected.age}
        country={dataSelected.country}
        phone={dataSelected.phone}
        id={dataSelected.id}
      ></Data>
    </div>
  );
}

export default App;
