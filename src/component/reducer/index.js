const initialState = {
    counterSum: 0,
    counterArr: [],
    numberOfCounters: 0
};

export default (state = initialState, {type, payload}) => {
    console.log(payload);
    switch (type) {
        case "COUNTERSUM":
            let newState = {...state};
            newState.counterSum = state.counterSum + payload;
            return newState;
            // return {counterSum: state.counterSum + payload};
        default:
            return state;
    }
};

