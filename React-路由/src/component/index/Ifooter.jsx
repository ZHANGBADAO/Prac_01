"use strict";
import  React from "react";
export  default  class Ifooter extends  React.Component{
    constructor() {
        super();
    }
    render() {
        var imgtit=this.props.data.titImg;
        var arr=this.props.data.liDate;
        return (
            <footer>
                <div class="top">
                    <a href="#">登录1</a>
                    <a href="#">注册</a>
                    <a href="#">反馈</a>
                    <a href="#">回到顶部</a>
                </div>
                <div class="bottom">Copyright © 2004-2017 京东JD.com 版权所有</div>
            </footer>
        )
    }
}