"use strict";
import  React from "react";

export default class Jisuan extends React.Component {
    constructor() {
        super();
        this.state={num:1}
        this.handleChange = this.handleChange.bind(this);
        this.jia = this.jia.bind(this);
        this.jian = this.jian.bind(this);
    }
    handleChange(){
        this.setState((preState,props)=>{
            preState.num++;
        });
    }
    jia(){
        this.setState((preState,props)=>{
            preState.num++;
        });
    }
    jian(){
        this.setState((preState,props)=>{
            preState.num--;
        });
    }
    render() {
        return (
            <div className="itme-xx-jg-js">
                <a href="#" className="valign"><img src="JDproject/src/static/images/jia1.png"/></a>
                <input type="text"  value={this.state.num} onClick={this.handleChange} onChange={this.handleChange}/>
                <a href="#" className="valign"><img src="JDproject/src/static/images/jian1.png"/></a>
            </div>
        )
    }
}