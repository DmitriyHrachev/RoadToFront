import { useState } from "react";
import styles from "../ToDoForm/ToDoForm.module.css";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Add new task"
        className={styles.input}
      />
      {/* <button>Сохранить</button> */}
    </form>
  );
}

export default ToDoForm;
