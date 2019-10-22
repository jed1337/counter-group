import {counterGroupReducer} from "./counterGroupReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    counterGroup: counterGroupReducer
});

export default rootReducer;