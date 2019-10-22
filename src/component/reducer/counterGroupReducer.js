import React from "react";

const initialState = {
    counterSum: 0,
    counterArr: [],
};

// export const counterGroupReducer = (state = initialState, {type, action.payload}) => {
export const counterGroupReducer = (state = initialState, action) => {
    console.log("action 1is", action);
    switch (action.type) {
        case "DECREASE_NUMBER":
            const changedDecreaseArr = state.counterArr.map(counterItem => {
                if (counterItem.id === action.payload.id) {
                    return {id: action.payload.id, count: counterItem.count - action.payload.changedNum};
                } else {
                    return counterItem;
                }
            });

            return {...state, counterArr: [...changedDecreaseArr]};

        case "INCREASE_NUMBER":
            const changeIncreaseArr = state.counterArr.map(counterItem => {
                if (counterItem.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        count: counterItem.count + action.payload.changedNum
                    };
                } else {
                    return counterItem;
                }
            });

            return {...state, counterArr: [...changeIncreaseArr]};
        case "COUNTER_UPDATE_CALL_BACK":
            return {...state, counterSum: state.counterSum+action.payload};
        case "GENERATE_COUNTERS":
            return {
                ...state,
                counterArr: new Array(parseInt(action.payload))
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

