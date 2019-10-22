let initialState = {
    counterSum:0,
    counterArr:[]
};

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
        default:
            return state;
    }
};

export default counterReducer;