"use strict";
import  React from "react";

export default class Mykf1 extends React.Component {
    constructor() {
        super();
    }
    render() {
        var arr1=this.props.dataTop;
        var arr2=this.props.dataBottom;
        return (
            <section id="kefu">
                <ul className="kefu1">
                <li><i>17</i><span>商品关注</span></li>
                <li><i>2</i><span>店铺关注</span></li>
                <li><a href="jilu.html"><i>91</i><span>浏览记录</span></a></li>
                <li><i className="te Hui-iconfont">&#xe6d0;</i><span>客户服务</span></li>
                </ul>
                <ul className="kefu2">
                    <li><a href="huodong.html"><i className="te1 Hui-iconfont">&#xe66a;</i><span>我的活动</span></a></li>
                <li><a href="Community.html"><i className="te2 Hui-iconfont">&#xe70a;</i><span>社区</span></a></li>
                <li><i className="te3 Hui-iconfont">&#xe62b;</i><span>京东众筹</span></li>
                <li><i className="te4 Hui-iconfont">&#xe6bb;</i><span>京东超市</span></li>
                </ul>
            </section>
        )
    }
}