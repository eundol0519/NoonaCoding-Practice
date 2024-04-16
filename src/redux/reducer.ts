import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
  count: number;
}

let initialState: State = {
  count: 0,
};

const reducer = (
  state: State = initialState,
  action: PayloadAction<{ num: number }>,
) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    default:
      return state;
  }
};

export default reducer;
