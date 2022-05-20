import { useState } from "react";
import styles from "../BoardForm/BoardForm.module.css";

function BoardForm({ addPanel }) {
  const [boardInput, setBoardInput] = useState("");

  const handlePanelChange = (e) => {
    setBoardInput(e.currentTarget.value);
  };

  const handlePanelKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePanelChange(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPanel(boardInput);
    setBoardInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onKeyDown={handlePanelKeyPress}
        onChange={handlePanelChange}
        type="text"
        value={boardInput}
        placeholder="Add new list..."
        className={styles.input}
      />
    </form>
  );
}

export default BoardForm;
