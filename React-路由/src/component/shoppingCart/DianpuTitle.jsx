"use strict";
import  React from "react";

export default class DianpuTitle extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="dianpu-title">
                <i className="xuanz Hui-iconfont">&#xe6a8;</i>
                <i className="wu Hui-iconfont">&#xe66a;</i>
                <a href="">京东自营店</a>
                <i className="yb Hui-iconfont">&#xe6d7;</i>
            </div>
        )
    }
}