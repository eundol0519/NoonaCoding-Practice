import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  // (Mounting-1) state 생성
  constructor(props) {
    super(props);
    console.log("constructor")

    this.state = {
      counter: 0,
      value: 0,
    };
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
      value: this.state.value + 1,
    });
  };

  // (Mounting-3) API 호출
  componentDidMount() {
    console.log("componentDidMount")
  }

  // (Updating-2) - New Props, setState(), forceUpdate()일 때 변화를 감지
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.counter)
  }

  // (Mounting-2, Updating-1) UI 그려짐
  render() {
    console.log("render")
    return (
      <div>
        {/* state 불러오는 방법 : this.state.# */}
        <div>{this.state.counter}</div>
        {/* 메소드 불러오는 방법 : this.# */}
        <button onClick={this.increase}>Click</button>

        {
          this.state.value < 5 && <BoxClass num={this.state.value} />
        }
      </div>
    );
  }
}
