import React, { useState } from "react";
import classes from "./App.module.scss";
import "./App.css";
import { useAutoResize } from "./hooks";

function App() {
  const [itemList, setItemList] = useState([]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...itemList, value]);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const textareaRef = useAutoResize(value);

  return (
    <div className={classes.app}>
      <div className={classes.content}>
        <div className={classes.itemList}>
          {itemList.length === 0 ? (
            <h3>No Items</h3>
          ) : (
            <ul className={classes.ul}>
              {itemList.map((item, index) => {
                return (
                  <li className={classes.li} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
          <textarea
            value={value}
            onChange={(e) => {
              handleChange(e);
            }}
            ref={textareaRef}
            className={classes.textarea}
          />
          <button className={classes.button}>送信する</button>
        </form>
      </div>
    </div>
  );
}

export default App;
