"use strict";
import  React from "react";

export default class SHeader extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <header id="headtop">
                <div className="tx Hui-iconfont">&#xe705;</div>
                <div className="wd">购物车</div>
                <div className="sz Hui-iconfont">编辑</div>
                <div className="xx Hui-iconfont">&#xe622;</div>
            </header>
        )
    }
}