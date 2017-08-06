"use strict";
import React from "react";
import Cheader from "../component/category/Cheader.jsx";
import Main  from "../component/category/Main.jsx";
import  Floatb from "../component/index/Floatb.jsx";

import "../static/js/com.js";
import "../static/css/public.css";
import "../static/css/category.css";

//server 服务器
import APICategory from "../Service/category.js"

export default class Category extends React.Component{
    constructor() {
        super();
    }
    componentDidMount(){
//获取窗体
        var lamp=1;
        var ulist=document.getElementById("rootList");//左边导航
        var ul=document.getElementById("rlul");//左边导航
        var conent=document.getElementById("remen-t");//右边内容
        var bheight1=window.innerHeight;//获取可视区域的高
        var width1=document.body.clientWidth;//获取可视区域的高
        var fontSize=100*(width1/720);
        var ulHeight=(bheight1-(fontSize*1.8));//ul高度计算
        ulist.style.height=ulHeight+"px";
        conent.style.height=ulHeight+"px";
        //touchStart事件  鼠标移动Ul控件
        var bTop=0;
        var jTop=0;
        ulist.addEventListener("touchstart",function(e){
            // var e = e || window.event; 下面代替
            var touches = e.touches[0];
            var oTop = touches.clientY;//获取
            ulist.addEventListener("touchmove",function(e){
                e.preventDefault();//阻止默认行为
                var touches2 = e.touches[0];
                bTop = touches2.clientY-oTop+jTop;
                if(bTop>150){
                    bTop=150;
                    ul.style.transform='translateY('+bTop+'px)';
                    ul.style.transition="1s";
                }else if(bTop<-1452){
                    bTop=-1452;
                    ul.style.transition="";
                    ul.style.transform='translateY('+bTop+'px)';
                }else{
                    ul.style.transition="";
                    ul.style.transform='translateY('+bTop+'px)';
                }
                console.log(bTop);
            },false);
        },false);

        ulist.addEventListener("touchend",function () {
            if(bTop==150){
                setTimeout(function () {
                    ul.style.transform='translateY(0px)';
                    ul.style.transition="";
                    jTop=0;
                    bTop=0;
                },0)
            }

            jTop=bTop;
        })
    }
    render() {
        //获取左边导航数据
        const list=APICategory.getRootList();
        //获取右边数据内容
        const main=APICategory.getMain();
        return (
            <div>
                <Cheader></Cheader>
                <Main data1={list} data2={main}></Main>
                <Floatb></Floatb>
            </div>
        )
    }
}