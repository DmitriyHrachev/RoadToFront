// import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";
import InputForm from "../InputForm/InputForm";
import styles from "../Board/Board.module.css";

const Board = function ({
  id,
  title,
  todos,
  handleToggle,
  removeTask,
  addTask,
}) {
  return (
    <div className={styles.board}>
      <div className={styles.title}>{title}</div>
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
            boardId={id}
          />
        );
      })}
      <div className={styles.form}>
        <InputForm
          onSubmit={addTask}
          boardId={id}
          placeholder="Add new task..."
        />
      </div>
    </div>
  );
};

export default Board;
