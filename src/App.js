import "./styles.css";
import Parent from "./Parent";
import UseMemoParent from "./useMemoParent";
export default function App() {
  return (
    <div className="App">
      <h1>useMemo and React.Memo Example</h1>
      {/* <Parent /> */}
      <UseMemoParent />
    </div>
  );
}
// As you can see, the child component’s render method is also invoked whenever the parent component is re-rendered. This will trigger the child components’ virtual DOM to do a variance check against the previous virtual DOM state. But, the real DOM will not change because the child component has no changes.

// Although the real DOM does not change, it will take some time to compare with virtual DOM to see identical. Therefore, this behaviour can cause significant performance issues and increase the loading times in large-scale applications.

// That’s why we need to use React.memo() and useMemo() to optimize the React component rendering process.

// It is important to keep in mind that React.memo() will only check for the prop alterations. If the functional component has a useState, useReducer, or useContext Hook, it will still force a re-render when the state or context changes.
