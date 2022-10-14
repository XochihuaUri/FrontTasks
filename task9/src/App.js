import "./App.css";
import List from "./List";

function App() {
  let bootCampers = ["Xochi", "José", "Joaquin", "Esteban", "Edgar", "Diego"];
  return (
    <div className="App">
      <h1 className="Title">List of boot campers</h1>
      <List array={bootCampers}></List>
    </div>
  );
}

export default App;
