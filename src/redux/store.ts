import { createStore } from "redux";
import reducer from "./reducer";

let store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>; // RootState : Redux Store의 state를 나타내는 타입
export type AppDispatch = typeof store.dispatch; // AppDispatch : Redux action의 dispatch 하는 함수의 타입

export default store;
