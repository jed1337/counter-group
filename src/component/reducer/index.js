
const initialState = { 
  counterSum: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "COUNTERSUM":
    console.log(payload)
      return { counterSum: state.counterSum + payload };
    default:
      return state;
  }
};

