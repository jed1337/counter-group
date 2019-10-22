import {combineReducers} from "redux";

const rootReducer = combineReducers({
    counterGroup: counterReducer
});

export default rootReducer;