"use strict";
import  React from "react";
import DianpuTitle  from "./DianpuTitle.jsx";
import  Jisuan from "./Jisuan.jsx";

export default class Sorder extends React.Component {
    constructor() {
        super();
    }
    render() {
        var arrs=this.props.data;
        return (
            <section id="Order">
                <div className="dianpu">
                    <DianpuTitle></DianpuTitle>
                     {
                        arrs.map((t,i) =>
                            <div className="chanpin" key={i}>
                                <div className="chanpin-title">
                                    <div className="itme">
                                        <i className="xuanz Hui-iconfont">&#xe6a8;</i>
                                    </div>
                                    <div className="itme-img">
                                        <a href="#">
                                            <img src={t.imgsrc}/>
                                        </a>
                                    </div>
                                    <div className="itme-xx">
                                        <div className="itme-xx-t">
                                            <a href={t.url}>
                                                <span>{t.title}</span>
                                            </a>
                                        </div>
                                        <div className="itme-xx-tt">
                                            <span>{t.sp1}</span>
                                        </div>
                                        <div className="itme-xx-mx">

                                        </div>
                                        <div className="itme-xx-jg">
                                            <span>¥<strong>{t.price}</strong>.00</span>
                                            <Jisuan></Jisuan>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        )
    }
}