import React from "react";
import "./Apitodo.css";

const Apitodos = ({ todo, todos, settodo, title, completed }) => {
  const handledelete = () => settodo(todo.filter((el) => el.id !== todos.id));

  const checkitem = () => {
    settodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="input-list">
      <div className="ui card">
        <div className={`content ${completed ? "completed" : ""}`}>
          <div className="header">{title}</div>
          <div className="extra-content">
            <div className="ui two buttons">
              <button className="ui red button" onClick={handledelete}>
                <i className="big white trash alternate icon"></i>
              </button>
              <button className="ui green button" onClick={checkitem}>
                <i className="big clipboard check icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apitodos;
