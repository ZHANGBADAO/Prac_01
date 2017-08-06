"use strict";
import  React from "react";
import  SHeader from "../component/shoppingCart/SHeader.jsx";
import  Sorder from "../component/shoppingCart/Sorder.jsx";
import Iwntj from "../component/index/Iwntj.jsx";
import  Floatb from "../component/index/Floatb.jsx";
//获取数据服务
import  shopData from "../Service/shoppingcart.js";
import  tjData from "../Service/index.js";

import "../static/js/com.js";
import "../static/css/public.css";
import "../static/css/iconfont.css";
import "../static/css/ShoppingCart.css";

export default class Shopping extends React.Component {
    constructor() {
        super();
    }

    render() {
        const tuijian=tjData.getWntj();
        const  order=shopData.getOrder();
        return (
            <div>
                <SHeader></SHeader>
                <Sorder data={order}></Sorder>
                <Iwntj data={tuijian}></Iwntj>
                <Floatb></Floatb>
            </div>
        )
    }
}