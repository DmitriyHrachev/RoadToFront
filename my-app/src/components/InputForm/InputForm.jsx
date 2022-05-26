import { useState } from "react";
import styles from "./InputForm.module.css";

function InputForm({ onSubmit, placeholder, boardId }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput, boardId);
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
        placeholder={placeholder}
        className={styles.input}
      />
      {/* <button>Сохранить</button> */}
    </form>
  );
}

export default InputForm;
