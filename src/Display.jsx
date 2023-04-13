import React from "react";

export default function Display({
  handleChange,
  handleClick,
  editKey,
  delItem,
  editItem,
  task,
  list,
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
        }}
      >
        Add Your Task:
      </label>

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index} id={index}>
              {item}
              <button onClick={() => delItem(index)}>del</button>
              <button onClick={() => editItem(item, index)}>edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
