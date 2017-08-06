"use strict";
import  React from "react";
export  default  class Iwntj extends  React.Component{
    constructor() {
        super();
    }
    render() {
        var imgtit=this.props.data.titImg;
        var arr=this.props.data.liDate;
        return (
            <section id="wntj">
                <div className="wntj-t"><a href=""><img src={imgtit}/></a></div>
                <ul>
                    {arr.map((t,i) =>
                        <li key={i}>
                            <img src={t.srcimg}/>
                            <span className="webbox">{t.sp1}</span>
                            <div className="jg"><span className="price">¥<i>{t.price}</i><b>.00</b></span><span className="kxs">看相似</span></div>
                        </li>
                       )
                    }
                </ul>
            </section>
        )
    }
}