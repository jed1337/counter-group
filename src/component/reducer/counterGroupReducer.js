import Counter from "../counters/Counter";
import React from "react";

const initialState = {
    counterSum: 0,
    counterArr: [],
};

export const counterGroupReducer = (state = initialState, {type, payload}) => {
    console.log("payload is", payload);
    switch (type) {
        case "DECREASE_NUMBER":
            const changedDecreaseArr = state.counterArr.map(counterItem => {
                if (counterItem.id === payload.id) {
                    return {id: payload.id, count: counterItem.count - payload.changedNum};
                } else {
                    return counterItem;
                }
            });

            return {...state, counterArr: [...changedDecreaseArr]};

        case "INCREASE_NUMBER":
            const changeIncreaseArr = state.counterArr.map(counterItem => {
                if (counterItem.id === payload.id) {
                    return {
                        id: payload.id,
                        count: counterItem.count + payload.changedNum
                    };
                } else {
                    return counterItem;
                }
            });

            return {...state, counterArr: [...changeIncreaseArr]};
        case "COUNTER_UPDATE_CALL_BACK":
            return {...state, counterSum: state.counterSum+payload};
        case "GENERATE_COUNTERS":
            return {
                ...state,
                counterArr: new Array(parseInt(payload))
                    .fill(0)
                    .map(() => ({ count: 0, id: generateID() }))
            };
        case "CLEAR_COUNTER_SUM":
            return {...state, counterSum: 0};
        default:
            return state;
    }
};

const generateID = () => {
    return new Date().getTime() + Math.random();
};

