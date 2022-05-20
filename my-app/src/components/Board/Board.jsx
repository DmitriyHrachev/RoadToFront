import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";
import ToDoForm from "../ToDoForm/ToDoForm";
import styles from "../Board/Board.module.css";

const Board = function (props) {
  const [todos, setTodos] = useState(props.data ? props.data : []);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className={styles.board}>
      <div className={styles.title}>{props.title}</div>
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
      <div className={styles.form}>
        <ToDoForm addTask={addTask} />
      </div>
    </div>
  );
};

export default Board;
