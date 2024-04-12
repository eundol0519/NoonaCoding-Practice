import "./App.css";
import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  let counter = 0;
  const [stateCounter, setStateCounter] = useState(0);

  const increase = () => {
    counter = counter + 1;
    setStateCounter((prev) => prev + 1);
    console.log(`counter : ${counter}, stateCounter : ${stateCounter}`);
  };

  // DOM이 그려지기 전에 실행됨
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });

  // DOM이 그려진 후에 실행됨
  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []); // updating

  return (
    <div>
      <div>{counter}</div>
      <div>state : {stateCounter}</div>
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default App;
