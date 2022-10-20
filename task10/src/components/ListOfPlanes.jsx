import "./ListOfPlanes.css";
import React, { useEffect, useState } from "react";
import Plane from "./Plane";
import { API } from "../util";

export default function ListOfPlanes() {
  //<button onClick={() => console.log(planes)}>Print the state</button>
  const [planes, setPlanes] = useState();

  useEffect(() => {
    setTimeout(() => {
      API().then((res) => setPlanes(res));
    }, 3000);
  }, []);

  return (
    <div className="ListOfPlanes">
      {!planes ? (
        <h1>Loading ...</h1>
      ) : (
        planes.map((plane, index) => {
          return (
            <Plane
              key={index}
              plane={plane.name}
              cost={plane.costoPorHora}
              img={plane.foto}
            />
          );
        })
      )}
    </div>
  );
}
