import './App.css';
import { useState } from 'react';

function App() {
  let counter = 0;
  const [stateCounter, setStateCounter] = useState(0);

  const increase = () => {
    counter = counter + 1;
    setStateCounter((prev) => prev + 1);
    console.log(`counter : ${counter}, stateCounter : ${stateCounter}`);
  }

  return (
    <div>
      <div>{counter}</div>
      <div>state : {stateCounter}</div>
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default App;
