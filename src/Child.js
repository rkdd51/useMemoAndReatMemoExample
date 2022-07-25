// import React from "react";

// //Child.js
// export default function Child(props) {
//   console.log("Child Render");
//   return (
//     <div>
//       <h2>{props.name}</h2>
//     </div>
//   );
// }

///Updated with REACT.MEMO

import React from "react";

//Child.jsexport
function Child(props) {
  console.log("Child Render");
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

export default React.memo(Child); //Add React.memo() HOC to the child component
