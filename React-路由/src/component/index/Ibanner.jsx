"use strict";
import  React from "react";
export  default  class Ibanner extends  React.Component{
    constructor() {
        super();
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay:3000,//可选选项，自动滑动
            pagination : '.swiper-pagination',//底下下圆按钮
            autoplayDisableOnInteraction : false,//手拖动后还还能自动播放
            paginationClickable: true,
            loop : true,//闭环
        })
    }
    render() {
        const arr =this.props.data;
        return (
            <section id="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            arr.map((t,i) =>
                                <div key={i} className="swiper-slide">
                                    <a href="#"><img src={t}/></a>
                                </div>
                            )
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        )
    }
}