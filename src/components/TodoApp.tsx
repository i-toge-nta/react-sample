import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {} from "../types";

interface Props {
  task: string;
  tasks: string[];
  inputTask: Function;
  addTask: Function;
}
const TodoApp: React.FC<Props> = ({ task, tasks, inputTask, addTask }) => {
  return (
    <div>
      <input type="text" onChange={e => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <ul>
        {tasks.map(function(item, i) {
          return <li key={i}>{item} </li>;
        })}
      </ul>
    </div>
  );
};
export default TodoApp;
