import Counter from "../counters/Counter";
import React from "react";

const initialState = {
    counterSum: 0,
    counterArr: [],
};

function generateId(){
    return new Date().getTime() + Math.random();
}

export default (state = initialState, {type, payload}) => {
    console.log("payload", payload);
    let newState = {...state};
    switch (type) {
        case "COUNTERSUM":
            newState.counterSum = state.counterSum + payload;
            return newState;
            // return {counterSum: state.counterSum + payload};
        case "REGENERATE_COUNTERS":
            newState.counterArr=[];
            for(let i=0;i<payload.numberOfCounters;i++){
                newState.counterArr.push(
                    <Counter id={generateId()}/>
                );
            }
            return newState;
        case "ASSIGN_COUNTERS":
            newState.counterArr = payload.counters;
            return newState;
        default:
            return state;
    }
};

