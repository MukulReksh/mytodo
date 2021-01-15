import React, { useState, useEffect } from "react";
import InputList from "./InputList";
import Todolist from "./Todolist";
import "./app.css";

const App = () => {
  const [inputtext, setinputtext] = useState("");
  const [inputdesc, setinputdesc] = useState("");
  const [list, setlist] = useState([]);
  const [todo, settodo] = useState([]);
  const [complete, setcomplete] = useState("all");
  const [filtertodo, setfiltertodo] = useState([]);
  const [filterlist, setfilterlist] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const tempdata = data.slice(0, 10);
        settodo(tempdata);
      });
  }, []);

  useEffect(() => {
    handlefilter();
  }, [list, complete, todo]);

  const handlefilter = () => {
    switch (complete) {
      case "Completed":
        setfiltertodo(todo.filter((todos) => todos.completed === true));
        setfilterlist(list.filter((lists) => lists.completed === true));
        console.log(filterlist);
        break;
      case "Pending":
        setfiltertodo(todo.filter((todos) => todos.completed === false));
        setfilterlist(list.filter((lists) => lists.completed === false));
        console.log(filterlist);
        break;
      case "All":
        setfiltertodo(todo);
        setfilterlist(list);
        console.log(list);
        break;
      default:
        setfiltertodo(todo);
        setfilterlist(list);
        break;
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "40px" }}>
        This is the example of my To do list
      </h1>
      <InputList
        inputtext={inputtext}
        list={list}
        setlist={setlist}
        setinputtext={setinputtext}
        inputdesc={inputdesc}
        setinputdesc={setinputdesc}
        setcomplete={setcomplete}
      />

      <div className="todosample-div">
        <Todolist
          list={list}
          setlist={setlist}
          todo={todo}
          settodo={settodo}
          filtertodo={filtertodo}
          filterlist={filterlist}
        />
      </div>
    </>
  );
};

export default App;
