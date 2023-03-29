import { combineReducers } from "redux";
import { valueReducer, stateReducer } from "./postReucer";



export const rootReducer=combineReducers({
    vl:valueReducer,
    st:stateReducer

})