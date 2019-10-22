import React, {Component} from "react";
import Counter from "./Counter";
import {connect} from "react-redux";

class CounterGroup extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   counterSum: 0,
  //   //   counterArr: new Array(parseInt(this.props.defaultCount)).fill(0)
  //   // };
  // }

  componentWillMount() {
    this.props.generateCounters(this.props.defaultCount);
  }

  regenrateCounters = () => {
    this.props.generateCounters(this.refs.countInput.value);
    this.props.clearCounterSum();
  };



  render() {
    return (
      <div>
        <input type="text" ref="countInput" />
        <button onClick={this.regenrateCounters}>
          Regenerate indicated Counters
        </button>
        <br />

        <span>总和：{this.props.counterSum}</span>

        {this.props.counterArr.map(counterItem => (
          <Counter
            key={counterItem.id}
            id={counterItem.id}
            count={counterItem.count}
            onCounterValueChanged={this.counterUpdateCallback}
            onIncreaseAction={this.props.incrementNumber}
            onDecreaseAction={this.props.decrementNumber}
          />
        ))}
      </div>
    );
  }
}

// export default CounterGroup;

const mapStateToProps = (reduxStore)=> ({
  counterSum: reduxStore.counterGroup.counterSum,
  counterArr: reduxStore.counterGroup.counterArr
});

const mapDispatchToProps = (dispatch)=> ({
 incrementNumber: (id)=>
   dispatch({
     type: "INCREMENT_NUMBER",
     payload: id
   }),

 decrementNumber: (id)=>
   dispatch({
     type: "DECREMENT_NUMBER",
     payload: id
   }),

  generateCounters: (generateCount)=>
   dispatch({
     type: "GENERATE_COUNTERS",
     payload: generateCount
   }),

  // counterUpdateCallback : changedNum => {
  //   this.setState({ counterSum: this.state.counterSum + changedNum });
  //   dispatch(,
  //
  clearCounterSum: () =>
    dispatch({
      type: "CLEAR_SUM"
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);