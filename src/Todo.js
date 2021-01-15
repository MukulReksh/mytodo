import React from "react";
import "./todo.css";

const Todo = ({ text, textdesc, lists, setlist, list }) => {
  const handledelete = () => {
    setlist(list.filter((el) => el.id !== lists.id));
  };
  const checkitem = () => {
    setlist(
      list.map((item) => {
        if (item.id === lists.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="input-list">
      <div className="ui card">
        <div className={`content ${lists.completed ? "completed" : ""}`}>
          <div className="header">{text}</div>
          <br />
          <div className="header">{textdesc}</div>
        </div>

        <div className="extra-content">
          <div className="ui two buttons">
            <button className="ui red button" onClick={handledelete}>
              <i className="big white  trash alternate icon"></i>
            </button>
            <button className="ui green button" onClick={checkitem}>
              <i className="big clipboard check icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
