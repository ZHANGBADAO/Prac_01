"use strict"
import flux from "flux";
import ToDoListStore from "./stores/ToDoListStore";


let Dispatcher = new flux.Dispatcher();

Dispatcher.register((action)=>{
    switch (action.type){
        case "ADD":
            ToDoListStore.addInfos(action.val);
            break;
        default:
            break;
    }
})

export default Dispatcher;