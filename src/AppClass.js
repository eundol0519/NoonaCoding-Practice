import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  // 생성자 (lifecycle)
  constructor(props) {
    super(props);

    // state 생성
    this.state = {
      counter: 0,
      value: 0,
    };
  }

  // 메소드
  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        {/* state 불러오는 방법 : this.state.# */}
        <div>{this.state.counter}</div>
        {/* 메소드 불러오는 방법 : this.# */}
        <button onClick={this.increase}>Click</button>

        <BoxClass num={this.state.value} />
      </div>
    );
  }
}
