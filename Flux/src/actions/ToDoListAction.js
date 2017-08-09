"use strict"
import Dispatcher from "../AppDispatcher";


export default {
    add: (param)=>{
        Dispatcher.dispatch({
            type:"ADD",
            val:param
        })
    }
}

