import Board from "./components/Board/Board";
import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";

function App() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Todo",
      todos: [
        { id: "1", task: "a", complete: false },
        { id: "2", task: "c", complete: false },
      ],
    },
    { id: 2, title: "Todo", todos: [{ id: "1", task: "b", complete: false }] },
  ]);

  const addPanel = (boardInput) => {
    if (boardInput) {
      const newPanel = {
        id: Date.now(),
        title: boardInput,
        todos: [],
      };
      setBoards([...boards, newPanel]);
    }
  };

  const addTask = (userInput, boardId) => {
    if (userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        complete: false,
      };
      setBoards(
        boards.map((board) => {
          if (board.id === boardId) {
            return { ...board, todos: [...board.todos, newItem] };
          } else {
            return board;
          }
        })
      );
    }
  };

  // const removeTask = (boardId, todoId) => {
  //   const newBoards = [];
  //   let newTodos = [];
  //   for (let i = 0; i < boards.length; i++) {
  //     if (boards[i].id === boardId) {
  //       for (let j = 0; j < boards[i].todos.length; j++) {
  //         if (boards[i].todos[j].id !== todoId) {
  //           newTodos.push(boards[i].todos[j]);
  //         }
  //       }
  //       console.log(newTodos);
  //       const newBoard = { ...boards[i], todos: newTodos };
  //       newBoards.push(newBoard);
  //     } else {
  //       newBoards.push(boards[i]);
  //     }
  //   }
  //   setBoards(newBoards);
  // };

  const removeTask = (boardId, todoId) => {
    setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          return {
            ...board,
            todos: board.todos.filter(function (todo) {
              return todo.id !== todoId;
            }),
          };
        } else {
          return board;
        }
      })
    );
  };

  const handleToggle = (boardId, todoId) => {
    const newBoards = [];
    const newTodos = [];
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === boardId) {
        for (let j = 0; j < boards[i].todos.length; j++) {
          if (boards[i].todos[j].id === todoId) {
            const newTodo = {
              ...boards[i].todos[j],
              complete: !boards[i].todos[j].complete,
            };
            newTodos.push(newTodo);
          } else {
            newTodos.push(boards[i].todos[j]);
          }
        }
        const newBoard = { ...boards[i], todos: newTodos };
        newBoards.push(newBoard);
      } else {
        newBoards.push(boards[i]);
      }
    }

    setBoards(newBoards);
  };

  return (
    <div className="App">
      <div className="grid">
        {boards.map((panel) => {
          return (
            <div className="col" key={panel.id}>
              <Board
                key={panel.id}
                id={panel.id}
                title={panel.title}
                todos={panel.todos}
                addTask={addTask}
                handleToggle={handleToggle}
                removeTask={removeTask}
              />
            </div>
          );
        })}
        <div className="col">
          <InputForm onSubmit={addPanel} placeholder="Add new list..." />
        </div>
      </div>
    </div>
  );
}

export default App;
