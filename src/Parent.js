import Child from "./Child";
import "./styles.css";
import React from "react";
import { useState } from "react";

//Parent.js
export default function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Parent Render");

  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
      <h2>{count}</h2>
      <Child name={`Child Component ${Math.random()}`} />
      {/* //If we Remove Math.random than Child Component will not render again and again */}
    </div>
  );
}
