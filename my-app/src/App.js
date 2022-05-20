import Board from "./components/Board/Board";
import { useState } from "react";
import BoardForm from "./components/BoardForm/BoardForm";

const todoList1 = [
  {
    id: 1,
    task: "Finish writing doc",
    complete: false,
  },
  {
    id: 2,
    task: "And another task",
    complete: true,
  },
  {
    id: 3,
    task: "Something else",
    complete: false,
  },
];

function App() {
  const [boards, setBoards] = useState([
    { id: 1, title: "Todo", data: todoList1 },
  ]);

  const addPanel = (boardInput) => {
    if (boardInput) {
      const newPanel = {
        id: Date.now(),
        title: boardInput,
        data: [],
      };
      setBoards([...boards, newPanel]);
    }
  };

  return (
    <div className="App">
      <div className="grid">
        {boards.map((panel) => {
          return (
            <div className="col" key={panel.id}>
              <Board key={panel.id} title={panel.title} data={panel.data} />
            </div>
          );
        })}
        <div className="col">
          <BoardForm addPanel={addPanel} />
        </div>
      </div>
    </div>
  );
}

export default App;
