import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [dataUser, setDataUser] = useState([]);

  const deleteItem = (id) => {
    const filtredUser = dataUser.filter((user) => user.id !== id);
    setDataUser(filtredUser);
  };

  return (
    <div className="App">
      <Form dataUser={dataUser} setDataUser={setDataUser} />
      <List
        dataUser={dataUser}
        setDataUser={setDataUser}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
