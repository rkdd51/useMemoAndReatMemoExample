import Child from "./Child";
import React from "react";
import { useState, useRef, useMemo } from "react";

//Parent.js
export default function UseMemoParent() {
  const [counts, setCounts] = useState(0);
  const [times, setTimes] = useState(0);
  const handleClick = () => {
    setCounts(counts + 1);
  };

  const useMemoRef = useRef(0);
  const incrementUseMemoRef = () => useMemoRef.current++;
  const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);

  console.log("Parent Render");

  return (
    <div>
      <button onClick={() => setTimes(times + 1)}>Force Child Render</button>
      <br></br>
      <br></br>
      <button onClick={handleClick}>Increase Count</button>
      <Child memoizedValue={memoizedValue} />
    </div>
  );
}
