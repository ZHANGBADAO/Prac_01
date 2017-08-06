"use strict";
import  React from "react";

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header id="headmy">
                <div className="tx Hui-iconfont">&#xe705;</div>
                <div className="wd">我的</div>
                <div className="sz Hui-iconfont">&#xe622;</div>
                <div className="xx Hui-iconfont">&#xe61d;</div>
            </header>
        )
    }
}