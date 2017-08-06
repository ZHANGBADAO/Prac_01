"use strict";
import  React from "react";
import  RootList from "./RootList.jsx";
import  Mainright from "./Mainright.jsx";
export default class Main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="main" className="clear">
                <RootList data={this.props.data1}></RootList>
                <Mainright data={this.props.data2}></Mainright>
            </div>
        )
    }
}