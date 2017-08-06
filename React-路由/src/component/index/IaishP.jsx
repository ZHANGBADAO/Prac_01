"use strict";
import  React from "react";

export  default  class IaishP extends  React.Component{
    constructor() {
        super();
    }
    render() {
        //上面ul数据
        var arr=this.props.data.ulTop;
        //span 颜色
        var bgc=this.props.data.c1;
        var bgColor={
            background:bgc
        }
        //底下ul数据
        var arr2=this.props.data.ulBottom
        return (
            <section id="aishP">
                <ul className="aish1">
                    {arr.map((t,i) =>
                        <li key={i} className={i%2==0 ?'te':'te2'}>
                            <div>
                            <strong className="aish1-tit">{t.s1}</strong>
                            <p className="aish1-wz">{t.p1}</p>
                            <span className="aish1-btn" style={bgColor}>{t.sp1}</span>
                            </div>
                            <div>
                            <a href="#"><img src={t.i1}/></a>
                            </div>
                        </li>
                        )
                    }
                </ul>
                <ul className="aish2">
                    {arr2.map((t,i) =>
                        <li key={i} className={i==3 ?'te':'te2'}>
                            <div>
                                <strong className="aish2-tit">{t.s2}</strong>
                                <p className="aish2-wz">{t.s2}</p>
                            </div>
                            <div>
                                <a href=""><img src={t.i2}/></a>
                            </div>
                        </li>
                       )
                 }
                </ul>
            </section>
        )
    }
}