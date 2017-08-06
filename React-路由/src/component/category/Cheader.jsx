"use strict";
import  React from "react";
export  default  class Cheader extends  React.Component{
    constructor() {
        super();
    }
    render() {
        return (
            <header id="cheader">
                <div className="top">
                    <a></a>
                    <input type="text"  placeholder="7.4冰洗超级品类日，领券最高减1500！"/>
                    <a href="login.html">登录</a>
                    <div className="search"></div>
                </div>
            </header>
        )
    }
}