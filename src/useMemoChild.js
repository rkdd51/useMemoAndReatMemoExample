import React from "react";

//Child.js
function useMemoChild({ memoizedValue }) {
  console.log("Child Render");

  return (
    <div>
      <h2>Child Component</h2>
      <p>
        I'll only re-render when you click <b>Force Child Render.</b>
      </p>
    </div>
  );
}

export default React.memo(useMemoChild);
