"use strict";
import  React from "react";
export  default  class Iheader extends  React.Component{
    constructor() {
      super();
    }
    render() {
        return (
            <header id="iheader">
                <div className="top">
                    <input type="text"  placeholder="7.4冰洗超级品类日，领券最高减1500！"/>
                    <a href="login.html">登录</a>
                    <div className="jd"></div>
                    <div className="search"></div>
                </div>
            </header>
        )
    }
}