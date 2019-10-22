import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseNumber = () => {
    this.setState({ count: this.state.count + 1 });
    this.props.onCounterValueChanged(1);
  };

  decreaseNumber = () => {
    this.setState({ count: this.state.count - 1 });
    this.props.onCounterValueChanged(-1);
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseNumber}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decreaseNumber}>-</button>
      </div>
    );
  }
}

export default Counter;
