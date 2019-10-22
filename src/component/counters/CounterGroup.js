import React, {Component} from "react";
import Counter from "./Counter";
import {connect} from "react-redux";

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // counterSum: 0,   move this state to ./reducer which can do the data logic and return the new state to mapStateToProps
            // counterArr: new Array(parseInt(this.props.defaultCount))
            //     .fill(0)
            //     .map(() => ({count: 0, id: this.generateID()}))
        };
    }

    componentWillMount() {
        this.props.generateCounters(this.props.defaultCount);
    }

    generateID = () => {
        return new Date().getTime() + Math.random();
    };

    regenerateCounters = () => {
        this.props.generateCounters(this.refs.countInput.value);
        this.props.clearCounterSum();
    };

    render() {
        return (
            <div>
                <input type="text" ref="countInput"/>
                <button onClick={this.regenerateCounters}>
                    Regenerate indicated Counters
                </button>
                <br/>
                <span>总和：{this.props.counterSum}</span>
                {this.props.counterArr.map(counterItem => (
                    <Counter
                        key={counterItem.id}
                        id={counterItem.id}
                        countValue={counterItem.count}
                        onCounterValueChanged={this.props.counterUpdateCallBack}
                        onClickIncreased={this.props.increaseNumber}
                        onClickDecreased={this.props.decreaseNumber}
                    />
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    decreaseNumber: (changedNum, id) =>
        dispatch({
            type: 'DECREASE_NUMBER',
            payload: {changedNum, id}
        }),
    increaseNumber: (changedNum, id) =>
        dispatch({
            type: 'INCREASE_NUMBER',
            payload: {changedNum, id}
        }),
    counterUpdateCallBack: changedNum =>
        dispatch({
            type: 'COUNTER_UPDATE_CALL_BACK',
            payload: changedNum
        }),
    generateCounters: counterNum =>
        dispatch({
            type: 'GENERATE_COUNTERS',
            payload: counterNum
        }),
    clearCounterSum: ()=>
        dispatch({
            type: 'CLEAR_COUNTER_SUM',
            payload: 0
        })
});

const mapStateToProps = reduxStore => ({
    counterSum: reduxStore.counterGroup.counterSum,
    counterArr: reduxStore.counterGroup.counterArr
});
// counterSum is a prop in CounterGroup, it will give counterSum a new value of state.counterSum whitch come from ./reducer switch return
// you try to imagine counterSum will be passed to this.props.counterSum in CounterGroup like the result of <CounterGroup counterSum={state.counterSum}/>

// connect(mapStateToProps)(CounterGroup)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup);//let CounterGroup and Redux know each other
