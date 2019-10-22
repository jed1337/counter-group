import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterSum: 0,
      counterArr: new Array(parseInt(this.props.defaultCount)).fill(0)
    };
  }

  regenrateCounters = () => {
    this.setState({
      counterArr: new Array(parseInt(this.refs.countInput.value)).fill(0),
      counterSum: 0
    });
  };

  counterUpdateCallback = changedNum => {
    this.setState({ counterSum: this.state.counterSum + changedNum });
  };

  render() {
    return (
      <div>
        <input type="text" ref="countInput" />
        <button onClick={this.regenrateCounters}>
          Regenerate indicated Counters
        </button>
        <br />

        <span>总和：{this.state.counterSum}</span>

        {this.state.counterArr.map(id => (
          <Counter
            key={new Date().getTime() + Math.random}
            onCounterValueChanged={this.counterUpdateCallback}
          />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
