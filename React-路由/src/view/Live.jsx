"use strict";
import  React from "react";
import Header from "../component/jingxuan/Header.jsx";
import Zhibo from "../component/jingxuan/Zhibo.jsx";

import "../static/js/com.js";
import "../static/css/public.css";
import "../static/css/iconfont.css";
import "../static/css/live.css";


//数据接口
import livData from "../Service/live.js";

export default class Live extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        var lamp = 1;//开关
        var top = document.getElementById("headertop"); //头条
        var nav = document.getElementById("headnav"); //导航
        window.onscroll = function () {
            //获取窗体相信滚动
            var stop = document.documentElement.scrollTop || document.body.scrollTop;
            if (stop > 60) {
                if (lamp) {
                    lamp = 0;
                    top.style.display = "none";//隐藏头条
                    nav.style.position = "fixed";
                    nav.style.top = "0";
                    nav.style.left = "0";
                }
            } else {
                if (lamp == 0) {
                    lamp = 1;
                    top.style.display = "block";//隐藏头条
                    nav.style.position = "";
                    nav.style.top = "";
                    nav.style.left = "";
                }
            }
        }
    }

    render() {
        var listData=livData.getLiveList();
        return (
            <div>
                <Header></Header>
                <Zhibo data={listData}></Zhibo>
            </div>
        )
    }
}