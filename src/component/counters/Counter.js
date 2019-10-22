import React, { Component } from "react";

class Counter extends Component {
  increaseNumber = () => {
    this.props.onIncreaseAction(this.props.id);
  };

  decreaseNumber = () => {
    this.props.onDecreaseAction(this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseNumber}>+</button>
        <span>{this.props.count}</span>
        <button onClick={this.decreaseNumber}>-</button>
      </div>
    );
  }
}

export default Counter;
