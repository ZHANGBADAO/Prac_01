"use strict";
import  React from "react";
import MyHeader from "../component/myCart/Header.jsx";
import My from "../component/myCart/My.jsx";
import Mydd from "../component/myCart/Mydd.jsx";
import Myfk from "../component/myCart/Myfk.jsx";
import Myfk1 from "../component/myCart/Mykf1.jsx";
import Myplus from "../component/myCart/Myplus.jsx";


import "../static/js/com.js";
import "../static/css/public.css";
import "../static/css/iconfont.css";
import "../static/css/myCart.css";


//引入数据
import  mycartData  from "../Service/mycart.js";
import mytj from "../Service/index.js";

export default class MyCart extends React.Component {
    constructor() {
        super();
    }
    componentDidMount(){
        //获取窗体
        var lamp=1;
        var headtop=document.getElementById("headmy");
        var tx=document.getElementsByClassName("tx")[0];
        var wd=document.getElementsByClassName("wd")[0];
        var xx=document.getElementsByClassName("xx")[0];
        var sz=document.getElementsByClassName("sz")[0];
        window.onscroll = function(){
            var stop=document.documentElement.scrollTop||document.body.scrollTop;
            if(stop>0&&stop<80){
                if(lamp) {
                    headtop.style.backgroundColor = "rgba(255,255,255,"+stop*0.01+")";
                }
            }else if(stop>80){
                if(lamp) {
                    lamp=0;
                    headtop.style.backgroundColor = "rgba(255,255,255,0.8)";
                    tx.style.display="block";
                    wd.style.display="block";
                    tx.style.color="#000";
                    xx.style.color="#000";
                    sz.style.color="#000";
                }
            }else{
                if(lamp==0){
                    lamp=1;
                    headtop.style.backgroundColor="";
                    tx.style.display="none";
                    wd.style.display="none";
                    tx.style.color="#fff";
                    xx.style.color="#fff";
                    sz.style.color="#fff";
                }
            }
        }
    }
    render() {
        const my=mycartData.getMy();
        const mydd=mycartData.getMyadd();
        const myfk=mycartData.getMyfk();
        const mykefu=mycartData.getKefu();

        return (
            <div>
                <MyHeader></MyHeader>
                <My data={my}></My>
                <Mydd data={mydd}></Mydd>
                <Myfk data={myfk}></Myfk>

                <Myplus></Myplus>

            </div>
        )
    }
}