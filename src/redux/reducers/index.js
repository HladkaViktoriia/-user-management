import {combineReducers} from "redux";
import {domReducer} from "./domReducer";

let reducer = combineReducers({domReducer});

export {reducer};
