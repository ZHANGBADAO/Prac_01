"use strict";
import  React from "react";
export  default  class Ituijian extends  React.Component{
    constructor() {
        super();
    }
    render() {
        var imgsrc=this.props.data.titImg; //推荐图片
        var arr=this.props.data.tjNews; //推荐信息
        return (
            <section id="tj">
                <div className="tj-c">
                    <div className="tj_left"><a href="#" className="valign"><img src={imgsrc}/></a></div>
                    <div className="tj_center">
                        <ul id="tuijian">
                            { arr.map((t,i) =>
                                    <li key={i}><a href="#"><span>{t.tp}</span>{t.cont}</a></li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="tj_right"><a href="#">更多</a></div>
                </div>
            </section>
        )
    }
}