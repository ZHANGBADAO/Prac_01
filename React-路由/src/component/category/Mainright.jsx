"use strict";
import  React from "react";
export  default class Mainright  extends  React.Component{
    constructor() {
       super();
    }
    render() {
        var imgscr=this.props.data.imgurl;
        var arr1 =this.props.data.mainTop;
        var arr2 =this.props.data.mainBottom;
        return (
            <div className="remen">
                <div id="remen-t">
                    <div className="remen-t-banner"><img src={imgscr}/></div>
                    <div className="remen-t-zc">专场推荐</div>
                    <ul className="remen-t-zc-d">
                        {arr1.map((t,i) =>
                                <li key={i}><a href={t.url}><img src={t.imgsrc} /><span>{t.title}</span></a></li>
                            )
                        }
                    </ul>
                    <div className="remen-t-zc">
                        <a>排行榜</a>
                    </div>
                    <ul className="remen-b">
                        {arr2.map((t,i) =>
                            <li key={i}><a href={t.url}><img src={t.imgsrc} /><span>{t.title}</span></a></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}