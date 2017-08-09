import React from "react";
import ToDoList from "./ToDoList.jsx";
import ToDoListAction from "../actions/ToDoListAction";
import ToDoListStore from "../stores/ToDoListStore";

export default class ToDoListContainer extends React.Component {

    constructor() {
        super();
        this.state = {infos:[]}
        this.AddInfo = this.AddInfo.bind(this);
    }

    componentWillMount(){
        ToDoListStore.addStateChangerLister(()=>{
            this.setState({infos:ToDoListStore.getInfos()})
        })
    }

    componentWillUnMount(){
        ToDoListStore.removeStateChangerLister()
    }

    AddInfo(val){
        ToDoListAction.add(val)
    }

    render() {

        return (
            <div>
             <ToDoList list={this.state.infos} Add={this.AddInfo}></ToDoList>
            </div>
        )
    }


}