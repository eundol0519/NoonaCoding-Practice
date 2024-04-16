import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Box from "./component/Box";
import { AppDispatch, RootState } from "./redux/store";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);

  const increase = () => {
    dispatch({
      type: "INCREMENT",
      payload: { num: 5 },
    });
  };

  const discrease = () => {
    dispatch({
      type: "DECREMENT",
      payload: { num: 3 },
    });
  };

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={discrease}>감소</button>
      <br />
      <Box />
    </div>
  );
}

export default App;
