import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    return (
      <div>
        {/* props 불러오는 방법 : this.props.# */}
        Box{this.props.num}
      </div>
    );
  }
}
