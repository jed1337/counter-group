let initialState = {
    counterSum:0,
    counterArr:[]
};

function generateRandomId() {
    return new Date().getTime() + Math.random;
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT_NUMBER":
            const incrementArr = state.counterArr.map((counterItem)=>{
                if(counterItem.id===action.payload){
                    return {...counterItem, number: counterItem.number + 1}
                } else{
                    return counterItem;
                }
            });
            return{...state, counterArr: incrementArr};
        case "DECREMENT_NUMBER":
            const decrementArr = state.counterArr.map((counterItem)=>{
                if(counterItem.id===action.payload){
                    return {...counterItem, number: counterItem.number - 1}
                } else{
                    return counterItem;
                }
            });
            return{...state, counterArr: decrementArr};
        case "GENERATE_COUNTERS":
            const generatedCounterArr = new Array(parseInt(action.payload))
                .fill(0)
                .map(()=>({id: generateRandomId(), count:0}));

            return {...state, counterArr: generatedCounterArr};
        default:
            return state;
    }
};

export default counterReducer;