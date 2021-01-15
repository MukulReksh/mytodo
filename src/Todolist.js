import React from "react";
import "./todolist.css";
import Apitodos from "./Apitodos";
import Todo from "./Todo";

const Todolist = ({ list, setlist, todo, settodo, filtertodo, filterlist }) => {
  return (
    <div className="filter-list-completed">
      {filterlist.map((lists) =>
        lists.completed ? (
          <Todo
            key={lists.id}
            lists={lists}
            textdesc={lists.textdesc}
            text={lists.text}
            setlist={setlist}
            list={list}
          />
        ) : null
      )}

      {filterlist.map((lists) =>
        !lists.completed ? (
          <Todo
            key={lists.id}
            lists={lists}
            textdesc={lists.textdesc}
            text={lists.text}
            setlist={setlist}
            list={list}
          />
        ) : null
      )}

      {filtertodo.map((todos) =>
        todos.completed ? (
          <Apitodos
            completed={todos.completed}
            title={todos.title}
            key={todos.id}
            todos={todos}
            settodo={settodo}
            todo={todo}
          />
        ) : null
      )}

      {filtertodo.map((todos) =>
        !todos.completed ? (
          <Apitodos
            completed={todos.completed}
            title={todos.title}
            key={todos.id}
            todos={todos}
            settodo={settodo}
            todo={todo}
          />
        ) : null
      )}
    </div>
  );
};

export default Todolist;
