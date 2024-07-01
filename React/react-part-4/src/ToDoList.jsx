import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setToDos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newToDo, setNewTodo] = useState("");

  let addNewTask = () => {
    setToDos((prevToDo) => {
      return [...prevToDo, { task: newToDo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let markAsDone = (id) => {
    setToDos((prevToDo) =>
      prevToDo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAllDone = () => {
    setToDos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteToDo = (id) => {
    setToDos((prevToDos) => todos.filter((prevToDos) => prevToDos.id != id));
  };

  let uppercaseAll = () => {
    setToDos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let lowercaseAll = () => {
    setToDos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={newToDo}
        onChange={updateTodoValue}
        placeholder="Add a task"
      />
      &nbsp; &nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br /> <br /> <br /> <br />
      <hr />
      <h3>Tasks ToDo</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
      <button onClick={uppercaseAll}>Upper Case All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={lowercaseAll}>Lower Case All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={markAllDone}>Mark All Done</button>
    </div>
  );
}
