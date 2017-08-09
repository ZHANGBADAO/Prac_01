import React from "react";

export default class ToDoList extends React.Component {

    constructor() {
        super();
        this.Add = this.Add.bind(this);
    }

    Add(){
        let val = this.refs.info.value;
        this.props.Add(val);
    }

    render() {

        let lis = this.props.list.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        return (

            <div>
                <ul>
                    {lis}
                </ul>
                <input type="text" ref="info"/>
                <input type="button" onClick={this.Add} value="添加一条信息"/>
            </div>
        )
    }


}