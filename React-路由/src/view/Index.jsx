"use strict";
import React from "react";
import Iheader from "../component/index/Iheader.jsx";
import Ibanner from "../component/index/Ibanner.jsx";
import Iadd from "../component/index/Iadd.jsx";
import Inav from "../component/index/Inav.jsx";
import Ituijian from "../component/index/Ituijian.jsx";
import Iaish from "../component/index/Iaish.jsx";
import IaishP from "../component/index/IaishP.jsx";
import Iwntj from "../component/index/Iwntj.jsx";
import  Floatb from "../component/index/Floatb.jsx";

import "../static/css/public.css";
import "../static/js/com.js";
import "../static/css/index.css";
import "../static/css/swiper-3.4.2.min.css";
import "../static/js/swiper-3.4.2.min.js";

import IndexData from "../Service/index.js"

export default class Index extends React.Component{
    constructor() {
        super();
    }

    componentDidMount(){
            let tuijian=document.querySelector("#tuijian");
            let upnum=0;
            setInterval(function(){
                upnum++;
                if(upnum==4){
                    upnum=0;
                    tuijian.style.transition="";
                    tuijian.style.webkitTransition="";
                    tuijian.style.transform='translateY('+0.6+'rem)';
                    tuijian.style.webkitTransform='translateY('+0.6+'rem)';
                    setTimeout(function () {
                        tuijian.style.transition="0.5s ease";
                        tuijian.style.webkitTransition="0.5s ease";
                        tuijian.style.transform='translateY(-' + 0.6*upnum + 'rem)';
                        tuijian.style.webkitTransform='translateY(-' + 0.6*upnum + 'rem)';
                    },0)
                }else{
                    tuijian.style.transition="0.5s ease";
                    tuijian.style.webkitTransition="0.5s ease";
                    tuijian.style.transform='translateY(-' + 0.6*upnum + 'rem)';
                    tuijian.style.webkitTransform='translateY(-' + 0.6*upnum + 'rem)';
                }
            },2000);

            //滚动导航
            var lamp=1;
            var header=document.getElementById("iheader");
            window.onscroll = function(){
                var stop=document.documentElement.scrollTop||document.body.scrollTop;
                if(stop>0&&stop<80){
                    if(lamp) {
                        header.style.backgroundColor = "rgba(255,0,0,"+stop*0.01+")";
                    }
                }else if(stop>80){
                    if(lamp) {
                        lamp=0;
                        header.style.backgroundColor = "rgba(255,0,0,0.8)";
                    }
                }else{
                    if(lamp==0){
                        lamp=1;
                        header.style.backgroundColor="";
                    }
                }
            }
        }

    render() {
        //banner图片数据
        const imglist=IndexData.getBanner();
        //广告1数据
        const add1=IndexData.getAdd(0);
        //导航数据
        const navData=IndexData.getNav();
        //广告2数据
        const add2=IndexData.getAdd(1);
        //推荐信息数据
        const tjxx=IndexData.getTuijian();
        //获取推荐Title
        const tjTitle=IndexData.getFenLeiTitle(0);
        const aiship=IndexData.getaishP();
        //广告3数据
        const add3=IndexData.getAdd(2);
        //享品质Title和数据
        const tjTitle1=IndexData.getFenLeiTitle(1);
        const xpDate=IndexData.getXpz();
        //广告4
        const add4=IndexData.getAdd(3);
        //特色推荐Title及数据
        const tsTitle1=IndexData.getFenLeiTitle(2);
        const tsDate=IndexData.getTse();
        //为您推荐数据
        const wntj=IndexData.getWntj();
        return (
            <div>
                <Iheader></Iheader>
                <Ibanner data={imglist}></Ibanner>
                <Iadd data={add1}></Iadd>
                <Inav data={navData}></Inav>
                <Iadd data={add2}></Iadd>
                <Ituijian data={tjxx}></Ituijian>
                <Iaish data={tjTitle}></Iaish>
                <IaishP data={aiship}></IaishP>
                <Iadd data={add3}></Iadd>
                <Iaish data={tjTitle1}></Iaish>
                <IaishP data={xpDate}></IaishP>
                <Iadd data={add4}></Iadd>
                <Iaish data={tsTitle1}></Iaish>
                <IaishP data={tsDate}></IaishP>
                <Iwntj data={wntj}></Iwntj>
                <Floatb></Floatb>
            </div>
        )
    }
}