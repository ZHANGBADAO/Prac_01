"use strict";
import  React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
                <header id="jheader">
                    <div className="top" id="headertop">
                        <div className="tx Hui-iconfont">&#xe682;</div>
                        <div className="wd"><img src="JDproject/src/static/images/toutiao.png"/></div>
                        <div className="sz Hui-iconfont">编辑</div>
                        <div className="xx Hui-iconfont">&#xe622;</div>
                    </div>
                    <div className="navzibo" id="headnav">
                        <ul>
                            <li> <Link to="/JingXuan" className="te">精选</Link></li>
                            <li><Link to="/Live">直播</Link></li>
                            <li><a href="focus.html">关注</a></li>
                            <li><a href="bill.html">清单</a></li>
                            <li><a href="">问答</a></li>
                            <li><a href="">视频购</a></li>
                        </ul>
                    </div>
                </header>
        )
    }
}