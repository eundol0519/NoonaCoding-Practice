import { createSlice } from "@reduxjs/toolkit";

interface State {
  count: number;
}

let initialState: State = {
  count: 0,
};

const reducerSlice = createSlice({
  name: "reducer",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.count = state.count + action.payload;
    },
    decrement(state, action) {
      state.count = state.count - action.payload;
    },
  },
});

export const reducerActions = reducerSlice.actions;
export default reducerSlice.reducer;
