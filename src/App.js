import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const deleteFromList = (index) => {
    setToDoList(toDoList.filter((item, toDoIndex) => index !== toDoIndex));
  };
  return (
    <div id={styles.page}>
      <h1>To-Do List</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (toDo === "") {
            return;
          }
          setToDoList((items) => [...items, toDo]);
          setToDo("");
        }}
      >
        <div id={styles.inputWrapper}>
          <input
            autoFocus
            onChange={(event) => setToDo(event.target.value)}
            value={toDo}
          />
        </div>
        <button>Add</button>
      </form>
      <ul id={styles.toDoList}>
        {toDoList.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => {
                deleteFromList(index);
              }}
            >
              ❌
            </button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
