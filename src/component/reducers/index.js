import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counterGroup: counterReducer
});

export default rootReducer;