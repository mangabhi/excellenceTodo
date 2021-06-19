import React, { useState } from "react";
import List from "./List";
const TodoList = () => {
  const [item, setItem] = useState("");
  const [mapItem, setMapItem] = useState([]);
  const addText = (e) => {
    setItem(e.target.value);
  };
  const addItem = () => {
    setMapItem((val) => {
      return [...val, item];
    });
    setItem("");
  };
  return (
    <div>
      <div>
        <h1>Excellence Todo</h1>
        <br />
        <input
          type="text"
          value={item}
          placeholder="Add Item Here"
          onChange={addText}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ol>
        {mapItem.map((itm) => {
          return <List text={itm}/>;
        })}
      </ol>
    </div>
  );
};

export default TodoList;
