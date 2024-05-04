import "./styles.css";
import { useState, useId } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    const newTask = {
      id: Date.now(),
      task: text,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="App">
      <h3> Add tasks</h3>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      <button
        className="btn"
        onClick={handleClick}
        disabled={text.length == 0 ? true : false}
      >
        Add
      </button>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              {task.task}{" "}
              <button className="btn" onClick={() => deleteTask(task.id)}>
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
