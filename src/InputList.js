import React from "react";
import "./inputlist.css";

function InputList({
  setcomplete,
  inputtext,
  setinputtext,
  list,
  setlist,
  inputdesc,
  setinputdesc,
}) {
  const handleinput = (e) => {
    setinputtext((e.target.title = e.target.value));
  };

  const handledesc = (e) => {
    setinputdesc((e.target.description = e.target.value));
  };

  const handleFilter = (e) => {
    setcomplete(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setlist([
      ...list,
      {
        text: inputtext,
        textdesc: inputdesc,
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setinputtext("");
    setinputdesc("");
  };
  return (
    <div className="ui container">
      <div className="input-div-style">
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              value={inputtext}
              name="title"
              onChange={handleinput}
              type="text"
              placeholder="enter some text"
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              value={inputdesc}
              name="description"
              onChange={handledesc}
              type="text"
              placeholder="Description here...."
            ></textarea>
          </div>

          <button className="ui button" onClick={handlesubmit} type="submit">
            Add
          </button>
        </form>
      </div>
      <select onChange={handleFilter} className="filter-list">
        <option className="filter-option">All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>
    </div>
  );
}

export default InputList;
