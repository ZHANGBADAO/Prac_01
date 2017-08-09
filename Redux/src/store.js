"use strict"
import {createStore} from "redux";

//根据规则生成store mutations // pure function
const Reducer = (state=0,action)=>{
    switch (action.type){
        case "ADD":
            return ++state;
            break;
        default:
            return state;
            break;
    }
}



export default createStore(Reducer);



