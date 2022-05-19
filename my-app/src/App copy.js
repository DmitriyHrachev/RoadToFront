import React, { useState } from "react";
import "./App.css";
// import Todo from "./components/Todo/Todo";
import Item from "./components/Item/Item";

function App() {
  const [list, setList] = useState([
    {
      id: 0,
      title: "Finish writing doc",
      status: false,
    },
    {
      id: 1,
      title: "And another task",
      status: false,
    },
    {
      id: 2,
      title: "Something else",
      status: false,
    },
  ]);

  const [item, setItem] = useState({ title: "" });

  const addNewItem = (e) => {
    e.preventDefault();
    setList([...list, { ...item, id: Date.now() }]);
    setItem({ title: "" });
  };

  const removeItem = (item) => {
    setList(list.filter((i) => i.id !== item.id));
  };

  return (
    <div className="App">
      {list.map((item) => (
        <Item key={item.id} item={item} remove={removeItem} />
      ))}
      <form>
        <input
          value={item.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
          type="text"
          placeholder="Add new task..."
        />
        <button onClick={addNewItem}>Ok</button>
      </form>
    </div>
  );
}

export default App;
